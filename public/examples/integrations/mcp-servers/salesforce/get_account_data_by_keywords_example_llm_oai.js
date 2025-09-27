import OpenAI from 'openai';

const PROMPT = "Get the data for the account with the name 'Acme Inc'";
const TOOL_NAME = "Salesforce.GetAccountDataByKeywords";

const client = new OpenAI({
  baseURL: 'http://localhost:9099/v1',
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
