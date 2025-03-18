import OpenAI from "openai";

const USER_ID = "you@example.com";
const PROMPT =
	"Search for roundtrip flights from Los Angeles to San Francisco on September 1st, 2025, returning on September 5th, 2025.";
const TOOL_NAME = "Search.SearchRoundtripFlights";

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
