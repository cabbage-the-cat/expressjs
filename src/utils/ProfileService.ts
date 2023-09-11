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
const prompt = `In JSON format: ${
  this.getNamePrompt()
}. Also a dating profile bio Max 50 words.JSON properties must be name and blurb. ${this.getBioPrompt()}. written in first person.`

    const profile = await this.gptRepo.callChatGPT(prompt)
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
