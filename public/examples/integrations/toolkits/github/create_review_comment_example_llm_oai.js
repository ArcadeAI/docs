import OpenAI from 'openai';

const USER_ID = 'you@example.com';
const PROMPT = "Create a review comment on pull request #2 in the ArcadeAI/example repository with the body 'This is a review comment.'";
const TOOL_NAME = 'Github.CreateReviewComment';

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