import OpenAI from 'openai';

// When using the FindTimeSlotsWhenEveryoneIsFree tool, always ground the LLM with the current date and day of the week,
// so that it can call the tool with the correct date arguments. Consider your user's timezone when appropriate.
const TODAY = new Date().toISOString().split('T')[0];
const DAY_OF_WEEK = new Date().toLocaleDateString('en-US', { weekday: 'long' });

const USER_ID = "you@example.com";
const PROMPT = `Today is ${TODAY}, ${DAY_OF_WEEK}. Find times when john.doe@example.com, jenifer.smith@example.com, and I are free next week. I'm looking for a time slot between 09:00 and 20:00.`;
const TOOL_NAME = "Google.FindTimeSlotsWhenEveryoneIsFree";

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
