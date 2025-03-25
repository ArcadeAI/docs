import OpenAI from "openai";

const PROMPT = "Get the details of the video with the id 'dQw4w9WgXcQ' on YouTube.";
const TOOL_NAME = "Search.GetYoutubeVideoDetails";

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
