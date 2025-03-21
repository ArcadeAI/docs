import OpenAI from "openai";

const PROMPT = "Get details about the product with item id '1234567890' on Walmart.";
const TOOL_NAME = "Search.GetWalmartProductDetails";

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
