import Arcade from "@arcadeai/arcadejs";

const client = new Arcade();

// Get a specific tool formatted for OpenAI
const githubStarRepo = await client.tools.formatted.get("Github.SetStarred", {
  format: "openai",
});

console.log(githubStarRepo);