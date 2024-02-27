import OpenAI from 'openai';

export async function initChatGPT() {
  const openai = new OpenAI({
    apiKey: 'sk-3', // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
    baseURL: 'https://api.zhiyungpt.com/v1',
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4',
  });
  console.log('chatCompletion', chatCompletion);
}
