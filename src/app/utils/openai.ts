import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'sk-3', // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
  baseURL: 'https://api.zhiyungpt.com/v1',
});

export async function sendMessage(
  messages: {
    role: 'user' | 'assistant';
    content: string;
  }[]
) {
  const chatCompletion = await openai.chat.completions.create({
    messages,
    model: 'gpt-4',
  });

  return chatCompletion.choices[0].message.content;
}
