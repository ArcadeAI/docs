import OpenAI from "openai";

// Initialize the OpenAI client, pointing to Arcade
const client = new OpenAI({
  apiKey: process.env.ARCADE_API_KEY,
  baseURL: "https://api.arcade.dev/v1",
});

// Get a unique identifier for your end user
const userId = "you@example.com";

// Use a tool and generate a response
const response = await client.chat.completions.create({
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    {
      role: "user",
      content: "Star the ArcadeAI/arcade-ai repo on GitHub",
    },
  ],
  model: "gpt-4o",
  user: userId,
  tools: ["GitHub.SetStarred", "GitHub.CountStargazers"],
  tool_choice: "generate",
});

console.log(response);
