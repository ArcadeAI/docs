import OpenAI from 'openai';

const USER_ID = 'you@example.com';
const PROMPT = "Delete the tweet with the ID 'your_tweet_id_here'."  // Tweet IDs can be found in the response of other X tools, like SearchRecentTweetsByUsername
const TOOL_NAME = 'X.DeleteTweetById';

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