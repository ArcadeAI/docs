import OpenAI from 'openai';

const USER_ID = "you@example.com";
const PROMPT = "update the draft email with id 1234567890 with the subject 'My new subject' and the body 'My new body'. Add johndoe@example.com to the to recipients and remove a@example.com from the to recipients.";
const TOOL_NAME = "Microsoft.UpdateDraftEmail";

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
