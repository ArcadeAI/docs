import OpenAI from "openai";

const PROMPT = "Search for products about 'Apple iPhone' on Google Shopping.";
const TOOL_NAME = "Search.SearchShoppingProducts";

const client = new OpenAI({
	baseURL: "https://api.arcade.dev",
	apiKey: process.env.ARCADE_API_KEY,
});

const response = await client.chat.completions.create({
	messages: [{ role: "user", content: PROMPT }],
	model: "gpt-4o-mini",
	tools: [TOOL_NAME],
	tool_choice: "generate",
});

console.log(response.choices[0].message.content);
