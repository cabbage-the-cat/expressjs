import { ChatGPTRepository } from './GPTClient';
interface Profile  {
  name: string
  blurb: string
}

export class ProfileService{
  private gptRepo: ChatGPTRepository;
constructor(gptRepo: ChatGPTRepository) {
  this.gptRepo = gptRepo
}
  /**
   *
   */
  async getRandomProfile(){

    const profile = await this.gptRepo.callChatGPT('In JSON format create a beautiful name and a dating profile blurb that is unique to the name generated limited to 75 words. full name and blurb must be different every time. properties must be name and blurb. For the profile reference a variety of tinder profiles. Return 1 json.')
  const yy =   profile?.replaceAll('\n','').split("```")
    const split_1 = yy[1]
    const final = split_1?.replaceAll('json','')
    const final_2 = final?.replaceAll(',}','}')
    console.log({
      yy,
      final_2
    })

    const parseString: string = final_2 as string || yy[0] as string
    const parsedData = JSON.parse(parseString) as Profile

    return {
      name: parsedData.name,
      description: parsedData.blurb,
      photo_url: 'https://thispersondoesnotexist.com/'
    }

  }

}
