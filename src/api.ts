import express from 'express';
import cors from 'cors';
import { ProfileService } from './utils/ProfileService';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));
const profileService = new ProfileService()

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world' });
});

api.get('/profile', async (req, res) => {
  if(req.headers.site!=='drama-freaks'){
    res.status(400).send({})
  }else {
    res.status(200).send(profileService.getRandomProfile());
  }
});


// Version the api
app.use('/api/v1', api);
