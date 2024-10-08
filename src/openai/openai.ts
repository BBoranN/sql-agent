import * as ChatGPT from '@logunify/chatgpt';

class OpenAI {
  private readonly api: ChatGPT.ChatGPTAPI;

  constructor() {
    this.api = new ChatGPT.ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY!,
      completionParams: {
        temperature: 0,
        model: 'gpt-4-turbo',
      }
    });
  }

  async sendMessage(message: string, parentMessageId: string | undefined = undefined): Promise<ChatGPT.ChatMessage> {
    const response = await this.api.sendMessage(message, { parentMessageId });
    return response;
  }
}

const openAI = new OpenAI();
export default openAI;
