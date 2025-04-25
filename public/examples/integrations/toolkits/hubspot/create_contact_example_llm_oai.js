import OpenAI from 'openai';

const PROMPT = "Create a contact with the following information: first name: John, last name: Doe, email: john.doe@example.com, phone: +1234567890, mobile phone: +1234567890, job title: Software Engineer";
const TOOL_NAME = "Hubspot.CreateContact";

const client = new OpenAI({
  baseURL: 'https://api.arcade.dev',
  apiKey: process.env.ARCADE_API_KEY
});

const response = await client.chat.completions.create({
  messages: [
    { role: 'user', content: PROMPT }
  ],
  model: 'gpt-4o-mini',
  tools: [TOOL_NAME],
  tool_choice: 'generate'
});

console.log(response.choices[0].message.content);
