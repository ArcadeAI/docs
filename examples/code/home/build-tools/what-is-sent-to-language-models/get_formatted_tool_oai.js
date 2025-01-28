import Arcade from "@arcadeai/arcadejs";

const client = new Arcade(); const listConversationsMetadata = await client.tools.formatted.get( "Slack.ListConversationsMetadata", { format: "openai", }, );

console.log(listConversationsMetadata);
