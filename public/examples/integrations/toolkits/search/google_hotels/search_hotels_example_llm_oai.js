import OpenAI from "openai";

const USER_ID = "you@example.com";
const PROMPT =
	"Search for hotels in New York, NY for 2 adults on September 1st, 2025, and check out on September 2nd, 2025.";
const TOOL_NAME = "Search.SearchHotels";

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
