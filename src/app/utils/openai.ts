import OpenAI from 'openai';

let openai = new OpenAI({
  apiKey: localStorage.getItem('apiKey') ?? '', // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export function updateOpenAI() {
  openai = new OpenAI({
    apiKey: localStorage.getItem('apiKey') ?? '', // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
    // baseURL: localStorage.getItem('proxy'),
  });
}

export async function sendMessage(
  messages: {
    role: 'user' | 'assistant';
    content: string;
  }[],
  // eslint-disable-next-line no-unused-vars
  setContent: (content: string) => void
) {
  const stream = await openai.chat.completions.create({
    messages,
    model: 'gpt-4',
    stream: true,
  });

  for await (const chunk of stream) {
    setContent(chunk.choices[0]?.delta?.content || '');
  }
}
