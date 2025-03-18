import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "Create a new Notion page with the title 'YOUR_NEW_PAGE_TITLE' and the content 'YOUR_NEW_PAGE_CONTENT' under the parent page with the title 'YOUR_PARENT_PAGE_TITLE'.";
const TOOL_NAME = "NotionToolkit.CreatePage";

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