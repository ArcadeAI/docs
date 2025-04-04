import OpenAI from 'openai';

const USER_ID = "you@example.com";
// TODO: Replace with an identifier for a real post
const PROMPT = "Get the top level comments of the post https://www.reddit.com/r/TestSubreddit/comments/1abcdefg/"
const TOOL_NAME = "Reddit.GetTopLevelCommentsOfPost";

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