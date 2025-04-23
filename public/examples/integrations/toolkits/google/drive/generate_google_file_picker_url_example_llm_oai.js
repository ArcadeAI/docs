import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "I haven't given you permission to access a specific file in my Google Drive. Please generate a Google File Picker URL for me to select a file.";
const TOOL_NAME = "Google.GenerateGoogleFilePickerUrl";

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
