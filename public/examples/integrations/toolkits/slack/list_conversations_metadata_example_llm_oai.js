import OpenAI from 'openai';

const USER_ID = 'you@example.com';
const PROMPT = "List metadata for all Slack conversations including public channels, private channels, IMs, and group DMs, limiting to 100 results."
const TOOL_NAME = 'Slack.ListConversationsMetadata';

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