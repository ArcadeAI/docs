import OpenAI from "openai";

const USER_ID = "you@example.com";
const PROMPT = "List prices in Stripe for product 'prod_123' with a limit of 10.";
const TOOL_NAME = "Stripe.ListPrices";

const client = new OpenAI({
    baseURL: "https://api.arcade.dev",
    apiKey: process.env.ARCADE_API_KEY,
});

const response = await client.chat.completions.create({
    messages: [{ role: "user", content: PROMPT }],
    model: "gpt-4o-mini",
    user: USER_ID,
    tools: [TOOL_NAME],
    tool_choice: "generate",
});

console.log(response.choices[0].message.content);