import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "Post to 'TestSubreddit'. The title is 'Why is the sky blue?' and the body is 'This is something I've been wondering about for a while. Wrong answers only.'";
const TOOL_NAME = "Reddit.SubmitTextPost";

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