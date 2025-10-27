import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PosthogApi.UpdateEnvironmentFolder";

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
  "folder_creation_date": "2023-10-12T14:23:30Z",
  "folder_id": "folder-123",
  "folder_type": "home",
  "folder_update_timestamp": "2023-10-15T10:00:00Z",
  "folder_uuid": "550e8400-e29b-41d4-a716-446655440000",
  "project_identifier": "project-456",
  "folder_path": "/path/to/folder",
  "folder_protocol_type": "http"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
