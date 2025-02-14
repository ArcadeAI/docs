import OpenAI from 'openai';

const USER_ID = 'you@example.com';
const PROMPT = "Retrieve the metadata for the direct message conversation with the username 'john_doe'."
const TOOL_NAME = 'Slack.GetDirectMessageConversationMetadataByUsername';

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
