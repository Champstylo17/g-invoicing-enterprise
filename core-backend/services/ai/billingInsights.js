
import { Configuration, OpenAIApi } from 'openai';

export async function getBillingInsights(invoiceHistory) {
  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  }));

  const prompt = `
    Analyze the following invoice trends and flag anything unusual:
    ${JSON.stringify(invoiceHistory)}
  `;

  const res = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  });

  return res.data.choices[0].message.content;
}
