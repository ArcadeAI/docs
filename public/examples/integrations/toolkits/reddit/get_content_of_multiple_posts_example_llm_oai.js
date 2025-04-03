import OpenAI from 'openai';

const USER_ID = "you@example.com";
// TODO: Replace with identifiers for real posts
const PROMPT = "Get the content of the posts https://www.reddit.com/r/TestSubreddit/comments/1abcdefg/ and https://www.reddit.com/r/TestSubreddit/comments/2asdfefg/"
const TOOL_NAME = "Reddit.GetContentOfMultiplePosts";

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