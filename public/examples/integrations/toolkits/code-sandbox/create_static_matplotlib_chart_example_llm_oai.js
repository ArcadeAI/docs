import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "Create a static matplotlib pie chart for this data: Two green apples, 5 red apples, 3 yellow apples.";
const TOOL_NAME = "CodeSandbox.CreateStaticMatplotlibChart";

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
  tool_choice: 'execute'
});

console.log(response); // The returned base64 encoded image needs to be decoded now 