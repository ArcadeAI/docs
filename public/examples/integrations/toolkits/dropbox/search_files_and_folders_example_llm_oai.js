import OpenAI from 'openai';

const PROMPT = "Search for items containing 'quarterly report 2025' in the folder /My Documents/My Folder";
const TOOL_NAME = "Dropbox.SearchFilesAndFolders";

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
