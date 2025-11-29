import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";  // Unique identifier for your user (email, UUID, etc.)
const TOOL_NAME = "Linear.GetIssue";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME, user_id: USER_ID});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "issue_id": "PROJ-123",
  "include_comments": true,
  "include_attachments": true,
  "include_relations": true,
  "include_children": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
