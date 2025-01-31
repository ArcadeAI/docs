import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "Delete the calendar event with the ID 'your_event_id_here'."; // Event IDs can be retrieved from the ListEvents tool.
const TOOL_NAME = "Google.DeleteEvent";

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