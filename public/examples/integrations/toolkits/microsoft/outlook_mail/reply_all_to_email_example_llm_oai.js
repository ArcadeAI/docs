import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "reply all to the email with id 1234567890 with the body 'I am replying to all recipients with this email.'";
const TOOL_NAME = "Microsoft.ReplyAllToEmail";

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
