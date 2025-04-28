import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "create an event inviting johndoe@example.com to a coffee chat with the subject 'Coffee chat' and the body 'Let's catch up!'";
const TOOL_NAME = "Microsoft.CreateEvent";

const client = new OpenAI({
  baseURL: 'https://api.arcade.dev',
  apiKey: process.env.ARCADE_API_KEY
});

const response = await client.chat.completions.create({
  messages: [
    { role: 'user', content: PROMPT }
  ],
  model: 'gpt-4o-mini',
  user: USER_ID,
  tools: [TOOL_NAME],
  tool_choice: 'generate'
});

console.log(response.choices[0].message.content);
