
import { Configuration, OpenAIApi } from 'openai';

export async function summarizeContext(data) {
  const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
  const openai = new OpenAIApi(config);
  const res = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      { role: 'user', content: `Summarize risks and recommendations: ${data}` }
    ]
  });
  return res.data.choices[0].message.content;
}
