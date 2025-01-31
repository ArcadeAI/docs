import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "Move the email with the ID 'your_email_id_here' to the trash."; // The ID of an email can be found with the ListEmails tool
const TOOL_NAME = "Google.TrashEmail";

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