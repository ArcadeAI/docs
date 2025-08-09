import Arcade from "@arcadeai/arcadejs";

const client = new Arcade();

// Get all tools in the Github toolkit formatted for OpenAI
const githubTools = await client.tools.formatted.list({
  format: "openai",
  toolkit: "github",
});

// Print the number of tools in the Github toolkit
console.log(githubTools.total_count);