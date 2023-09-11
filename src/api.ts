import express from 'express';
import cors from 'cors';
import { ProfileService } from './utils/ProfileService';
import { ChatGPTRepository } from './utils/GPTClient';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));
const gptRepo = new ChatGPTRepository(process.env.GPT_KEY)

const profileService = new ProfileService(gptRepo)

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world' });
});
api.get('/tarot', async (req, res) => {
  if(req.headers.site!=='drama-freaks'){
    res.status(400).send({})
  }else {

    try {
      // @ts-ignore
      const isReversed = req.query.is_reversed ==='true' || req.query.is_revered === true
      // @ts-ignore
      const card =  req.query.card as string
      const reading =  await profileService.getTaroCarReading(card, isReversed)
      res.status(200).send(reading);
    }catch (e) {
      console.log(e)
      res.status(400).send({})

    }

  }
});


api.get('/profile', async (req, res) => {
  if(req.headers.site!=='drama-freaks'){
    res.status(400).send({})
  }else {

    try {
      const profile =   await profileService.getRandomProfile()
      res.status(200).send(profile);
    }catch (e) {
      console.log(e)
      res.status(400).send({})

    }

  }
});


// Version the api
app.use('/api/v1', api);
