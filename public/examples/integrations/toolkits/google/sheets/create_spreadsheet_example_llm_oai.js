import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "Create a new spreadsheet named 'Customers'. I want three columns: Name, Age, and City. John is 20 y/o from New York. Jane is 25 y/o from Los Angeles. Calculate the average age of all customers and put it in the fifth row (use a formula so that it updates automatically)."
const TOOL_NAME = "Google.CreateSpreadsheet";

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