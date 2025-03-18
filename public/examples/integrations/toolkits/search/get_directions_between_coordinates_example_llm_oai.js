import OpenAI from "openai";

const USER_ID = "you@example.com";
const PROMPT =
	"Get directions between the following coordinates: 37.7879, -122.4076 and 37.8219, -122.4789.";
const TOOL_NAME = "Search.GetDirectionsBetweenCoordinates";

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
