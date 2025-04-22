
import { Configuration, OpenAIApi } from 'openai';

export async function getSmartSummary(dataSummary) {
  const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
  const openai = new OpenAIApi(config);

  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a financial analyst AI' },
      { role: 'user', content: `Analyze this: ${dataSummary}` }
    ]
  });

  return response.data.choices[0].message.content;
}
