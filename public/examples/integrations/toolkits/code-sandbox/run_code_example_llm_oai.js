import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "Write a JavaScript program that merges two sorted lists into one sorted list. List 1: [1, 3, 5, 7], List 2: [2, 4, 6, 8] and run it.";
const TOOL_NAME = "CodeSandbox.RunCode";

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