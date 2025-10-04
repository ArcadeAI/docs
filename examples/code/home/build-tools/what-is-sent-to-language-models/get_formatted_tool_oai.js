import Arcade from "@arcadeai/arcadejs";

const client = new Arcade();

// Get what is sent to the language model for a specific tool
const listConversationsMetadata = await client.tools.formatted.get("Slack.ListConversationsMetadata",
  { format: "openai" }
);

console.log(listConversationsMetadata);
