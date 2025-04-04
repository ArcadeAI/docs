import { OpenAI } from "openai";

// Initialize the OpenAI client, pointing to Arcade
const client = new OpenAI({
  baseURL: "https://api.arcade.dev/v1",
  apiKey: "arcade_api_key",
});

// Set a unique identifier for your end user
let userId = "you@example.com";

// Determine which tools will be available to the chatbot agent
let tools = [
  "GitHub.SetStarred",
  "Github.ListStargazers",
  "Github.CreateIssue",
  "Github.CreateIssueComment",
  "Github.ListPullRequests",
  "Github.GetPullRequest",
  "Github.UpdatePullRequest",
  "Github.GetRepository",
  "Github.ListRepositoryActivities",
];

while (true) {
  // Ask the user for input
  const prompt = await input("Enter your prompt (type 'exit' to quit):");
  if (prompt.toLowerCase() === "exit") {
    break;
  }

  // Use a tool and generate a response
  const response = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that can interact with GitHub.",
      },
      { role: "user", content: prompt },
    ],
    model: "gpt-4",
    user: userId,
    tools: tools,
    tool_choice: "generate",
  });

  console.log(response.choices[0].message.content);
}
