import OpenAI from "openai";

const USER_ID = "you@example.com";
const PROMPT =
  "Create a billing portal session for customer cus_123456789 with return URL https://example.com/billing.";
const TOOL_NAME = "Stripe.CreateBillingPortalSession";

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
