import fetch from 'node-fetch';
interface ChatGPTApiResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}
export class ChatGPTRepository {
  private apiKey: any;
  private apiUrl: string;
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.openai.com/v1/chat/completions';
  }

  async callChatGPT(prompt) {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo', // Use the desired ChatGPT model
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: ChatGPTApiResponse = <ChatGPTApiResponse>await response.json();
      return data?.choices?.[0].message.content;
    } catch (error) {
      throw new Error(`Error calling ChatGPT API: ${error}`);
    }
  }
}
