import OpenAI from 'openai';

const PROMPT = "Download the file /My Documents/My Folder/quarterly report 2025.pdf";
const TOOL_NAME = "Dropbox.DownloadFile";

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
