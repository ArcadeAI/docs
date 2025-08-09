import Arcade from "@arcadeai/arcadejs";

const client = new Arcade();

// Get all tools formatted for OpenAI
const allTools = await client.tools.formatted.list({ format: "openai" });

// Print the number of tools
console.log(allTools.total_count);