import OpenAI from "openai";

const PROMPT = "Search for 'Apple iPhone' on Walmart. Sort by price from low to high. Filter for products with next day delivery option and a price of $250 or less.";
const TOOL_NAME = "Search.SearchWalmartProducts";

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
