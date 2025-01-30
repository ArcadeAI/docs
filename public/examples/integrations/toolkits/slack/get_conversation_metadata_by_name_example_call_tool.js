import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "you@example.com";
const TOOL_NAME = "Slack.GetConversationMetadataByName";

// Start the authorization process
const authResponse = await client.tools.authorize({
    tool_name: TOOL_NAME,
    user_id: USER_ID,
});

if (authResponse.status !== "completed") {
    console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
    conversation_name: "general"
};

const response = await client.tools.execute({
    tool_name: TOOL_NAME,
    input: toolInput,
    user_id: USER_ID,
});

console.log(response); 