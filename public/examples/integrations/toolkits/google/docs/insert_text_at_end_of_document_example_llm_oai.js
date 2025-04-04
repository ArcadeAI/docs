import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "Insert text at the end of the Google Docs document with the ID 'your_document_id_here'."; // Document Ids can be found with the SearchDocuments tool
const TOOL_NAME = "Google.InsertTextAtEndOfDocument";

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
