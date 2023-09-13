import { ChatGPTRepository } from './GPTClient';
interface Profile  {
  name: string
  blurb: string
}

interface TAROT  {
  interpretation: string
  adjectives: string[]
}


const TorotCardConfig: Record<string, any> = {
  DEATH: {
    url:'https://randomtarotcard.com/Death.jpg',
    name:'Death',
    context:'Endings, Failure, Letting go of attachments, Mortality, Profound change, Severe illness',
    upside_down_context: 'Delayed endings, Depression, Living unaware, Long terminal illness, Resistance to change'
  },
  WHEEL_OF_FORTUNE:{
    url:'https://randomtarotcard.com/WheelofFortune.jpg',
    name: 'Wheel of Fortune',
    context:'Chance, Changes, Destiny, Luck, Opportunity, Winning',
    upside_down_context: 'Bad luck, Disappointment, Misfortune, Mishap, Unforeseen'
  },
  THE_EMPRESS:{
    url:'https://randomtarotcard.com/TheEmpress.jpg',
    name: 'The Empress',
    context:'A new opportunity, Abundance, Maternal care, Nurturing, Pregnancy, Stability',
    upside_down_context: 'Domestic problems, Financial issues, Stagnation, Unwanted pregnancy'
  },
  THE_MAGICIAN:{
    url:'https://randomtarotcard.com/TheMagician.jpg',
    name: 'The Magician',
    context:'Determined, Dexterity, Resourceful, Skilled, Strong powerful man',
    upside_down_context: 'Communication blocks, Confusion, Deceit, Ill intentions, Lack of energy'
  },
  THE_MOON:{
    url:'https://randomtarotcard.com/TheMoon.jpg',
    name: 'The Moon',
    context:'Deception, Difficult period, Fear, Hidden things, Insecurity, Mental confusion',
    upside_down_context: 'Insomnia, Mysteries unveiled, Release of fear, Unhappiness, Unusual'
  },
  THE_TOWER:{
    url:'https://randomtarotcard.com/TheTower.jpg',
    name: 'The Tower',
    context:'Accident or damage, Catastrophe, Destruction, Renovation, Unexpected change',
    upside_down_context: ' Illness, Losses, Obstacles, Volatile situation'
  },
  THE_STAR:{
    url:'https://randomtarotcard.com/TheStar.jpg',
    name: 'The Star',
    context:'Astronomy, Good health, Hope, Inspiration, Opportunities, Spirituality',
    upside_down_context: 'Despair, Disappointments, Illness, Missed opportunities'
  },
  THE_FOOL:{
    url:'https://randomtarotcard.com/TheFool.jpg',
    name: 'The Fool',
    context:'Beginnings, Innocence, Leap of faith, Originality, Spontaneity',
    upside_down_context: 'Chaos, Folly, Lack of direction, Naivety, Poor judgement, Stupidity'
  },
  THE_HIGH_PRIESTESS:{
    url:'https://randomtarotcard.com/TheHighPriestess.jpg',
    name: 'The High Priestess',
    context:' Hidden talents, Intuition, Mystery, Spiritual insight, Things yet to be revealed',
    upside_down_context: 'Information withheld, Lack of personal harmony, Secrets'
  },
  THE_EMPEROR:{
    url:'https://randomtarotcard.com/TheEmperor.jpg',
    name: 'The Emperor',
    context:' Authority, Father figure, Law and order, Leadership, Power, Promotion',
    upside_down_context: 'Control freak, Immaturity, Lack of discipline, Loss of authority, Manipulative friends'
  },
  THE_HIEROPHANT:{
    url:'https://randomtarotcard.com/TheHierophant.jpg',
    name: 'The Hierophant',
    context:'Education, Learning, Marriage, Religion, Seeking counsel or advice, Spiritual guidance, Tradition',
    upside_down_context: 'Abuse of position, Breakdown, Poor counsel, Rejection of family values'
  },
  THE_LOVERS:{
    url:'https://randomtarotcard.com/TheLovers.jpg',
    name: 'The Lovers',
    context:'Being at a crossroads, Choices, Commitment, Falling in love, Partnerships',
    upside_down_context: 'Disharmony, Imbalance, Misalignment of values, Self-love'
  },
  THE_CHARIOT:{
    url:'https://randomtarotcard.com/TheChariot.jpg',
    name: 'The Chariot',
    context:'A journey, Ambition, Confidence, Drive, Overcoming obstacles, Will power',
    upside_down_context: 'Lack of direction, Scattered energy, Self doubt'
  },
  STRENGTH:{
    url:'https://randomtarotcard.com/Strength.jpg',
    name: 'Strength',
    context:'Introspection, Meditation, Self-reflection, Solitude, Soul-searching, Withdrawn from society',
    upside_down_context: 'Exile, Loneliness, Misfit, Sadness, Withdrawing from loved ones'
  },
  THE_HERMIT:{
    url:'https://randomtarotcard.com/TheHermit.jpg',
    name: 'The Hermit',
    context:'Introspection, Meditation, Self-reflection, Solitude, Soul-searching, Withdrawn from society',
    upside_down_context: 'Exile, Loneliness, Misfit, Sadness, Withdrawing from loved ones'
  },
  JUSTICE:{
    url:'https://randomtarotcard.com/Justice.jpg',
    name: 'Justice',
    context:'Balance and equilibrium, Cause and effect, Fairness, Justice, Responsibilty',
    upside_down_context: 'Dishonesty, Imbalance, Lack of accountability, Legal flaws, Unfair treatment'
  },
  THE_WORLD:{
    url:'https://randomtarotcard.com/TheWorld.jpg',
    name: 'The World',
    context:'Achievement, Fulfillment, Possibilities, Successful conclusions',
    upside_down_context: 'Delayed success, Failed plans, Lack of completion, Stagnation'
  },
  THE_HANGED_MAN:{
    url:'https://randomtarotcard.com/TheHangedMan.jpg',
    name: 'The Hanged Man',
    context:'Breaking old patterns, Circumspection, Letting go, Metamorphosis, Suspension',
    upside_down_context: 'Egotism, Inability to change, Missing an opportunity'
  },
  THE_SUN:{
    url:'https://randomtarotcard.com/TheSun.jpg',
    name: 'The Sun',
    context:'Enlightment, Joy, Marriage, Material happiness, Success, Vitality',
    upside_down_context: 'False impressions, Lack of clarity, Low Vitality, Sadness'
  },
  JUDGEMENT:{
    url:'https://randomtarotcard.com/Judgement.jpg',
    name: 'Judgement',
    context:'Awakening, Decision making, Redemption, Reincarnation, Renewal, Transition',
    upside_down_context: 'Poor logic, Poor or hasty judgement, Self-doubt, Stagnation'
  },
  THE_DEVIL:{
    url:'https://randomtarotcard.com/TheDevil.jpg',
    name: 'The Devil',
    context:'Bondage, Enslavement, Fear, Feeling trapped, Materialism, Temptation, Unhealthy relationships',
    upside_down_context: 'Breaking from addictions, Divorce, Freedom from restraints'

  },
  TEMPERANCE:{
    url:'https://randomtarotcard.com/Temperance.jpg',
    name: 'Temperance',
    context:'Alchemy, Balance, Connecting with your guides, Harmony, Looking for divine intervention, Moderation',
    upside_down_context: 'Disharmony, Imbalance, Lack of patience, Onset of illness'
  }
}



export class ProfileService{
  private gptRepo: ChatGPTRepository;
constructor(gptRepo: ChatGPTRepository) {
  this.gptRepo = gptRepo
}

async getTaroCarReading(key: string, isReversed: boolean){

  const name = TorotCardConfig[key].name
  const reverseP = (isReversed)?'is reverse': ''
  const prompt = `You are a tarot card reader. In json format can you give me the reading for ${name} ${reverseP} in 2 sentences. Properties are interpretation and adjectives . New interpretation every time please.  Include a list of 4 adjectives at the end. `
  const profile = await this.gptRepo.callChatGPT(prompt)
  const yy =   profile?.replaceAll('\n','').split("```")
  const split_1 = yy[1]
  const final = split_1?.replaceAll('json','')
  const final_2 = final?.replaceAll(',}','}')

  const parseString: string = final_2 as string || yy[0] as string
  const parsedData = JSON.parse(parseString) as TAROT
  return {
    adjectives: parsedData.adjectives,
    interpretation: parsedData.interpretation,
  }

}

  /**
   *
   */
  async getRandomProfile(){

    const profile = await this.gptRepo.callChatGPT('In JSON format create a full name and a dating profile blurb limited to 50 words. Properties of json must be name and blurb. Include emote if appropriate. Pick a random tone from a wide array of cultures, age,income,genetics,sex drive, and gender.')
  const yy =   profile?.replaceAll('\n','').split("```")
    const split_1 = yy[1]
    const final = split_1?.replaceAll('json','')
    const final_2 = final?.replaceAll(',}','}')

    const parseString: string = final_2 as string || yy[0] as string
    const parsedData = JSON.parse(parseString) as Profile

    return {
      name: parsedData.name,
      description: parsedData.blurb,
      photo_url: 'https://thispersondoesnotexist.com/'
    }

  }


  getNamePrompt(){
    return `Generate a full name from ${this.getNameOrigin()} origin.`
  }
  getBioPrompt(){
    return `bio is related to ${this.getBio()}`
  }

  getBio(){
    const conversationTopics = [
      "Hobbies and Interests",
      "Travel Experiences",
      "Favorite Movies and TV Shows",
      "Books and Reading",
      "Music Preferences",
      "Cuisine and Dining",
      "Life Goals and Aspirations",
      "Family and Relationships",
      "Work and Career",
      "Travel Bucket List",
      "Significant Life Experiences",
      "Outdoor Activities",
      "Cultural and Social Events",
      "Volunteering and Causes",
      "Core Values",
      "Relationship Goals",
      "Travel Stories",
      "Favorite Quotes",
      "Bucket List",
      "Personal Challenges",
    ];


    const conversationTopics_2 = [
      "Childhood Memories",
      "Fascinating Places Visited",
      "Art and Creativity",
      "Fitness and Exercise",
      "Pets and Animals",
      "Spirituality and Beliefs",
      "Favorite Season or Weather",
      "Technology and Gadgets",
      "Languages Spoken or Want to Learn",
      "Musical Instruments Played",
      "Dream Home or Living Environment",
      "Favorite Color and Why",
      "Weekend Activities",
      "Cultural Background and Heritage",
      "Sense of Humor and Funny Stories",
      "Favorite Superheroes or Characters",
      "Online Communities or Forums",
      "Hidden Talents or Skills",
      "Recent Achievements or Milestones",
      "Social Causes They Support",
      "Favorite Podcasts or YouTubers",
      "Outdoor Adventures They Want to Try",
      "Favorite Board Games or Video Games",
      "Preferred Date Ideas or Activities",
      "Life Philosophies or Mantras",
      "Hopes for the Future",
      "Unique or Unusual Experiences",
      "Ideal Vacation Destination",
      "Most Memorable Concert or Event Attended",
      "Movie or Book Recommendations",
      "Personal Traditions or Rituals",
      "Dream Job or Career Change",
    ];



    const topic = this.getRandomValue(conversationTopics)
    const topicTwo = this.getRandomValue(conversationTopics_2)

    return [topic, topicTwo].join(',')
  }

  getNameOrigin(){
    const countries = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo (Congo-Brazzaville)",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czechia (Czech Republic)",
      "Democratic Republic of the Congo (Congo-Kinshasa)",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor (Timor-Leste)",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Greece",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Holy See",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Ivory Coast",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Morocco",
      "Mozambique",
      "Myanmar (formerly Burma)",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "North Korea",
      "North Macedonia (formerly Macedonia)",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine State",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Qatar",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Korea",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Togo",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States of America",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ];

    return this.getRandomValue(countries)
  }


  getRandomValue(items: string[]){

    const randomIndex = Math.floor(Math.random() * items.length);
    return  items[randomIndex];

  }

}
