import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "Create a new calendar event for tomorrow at 10am. This meeting is for a 1:1 with John Doe. Please include john.doe@example.com in the attendees.";
const TOOL_NAME = "Google.CreateEvent";

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