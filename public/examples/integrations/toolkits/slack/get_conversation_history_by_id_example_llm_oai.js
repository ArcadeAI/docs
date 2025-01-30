import OpenAI from 'openai';

const USER_ID = 'you@example.com';
const PROMPT = "Fetch the conversation history for conversation ID 'C1234567890' between '2023-01-01 00:00:00' and '2023-01-31 23:59:59'."
const TOOL_NAME = 'Slack.GetConversationHistoryById';

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