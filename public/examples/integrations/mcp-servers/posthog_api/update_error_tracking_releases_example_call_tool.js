import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PosthogApi.UpdateErrorTrackingReleases";

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
  "created_at_timestamp": "2023-09-23T18:25:43.511Z",
  "project_identifier": "12345",
  "project_key": "my_project",
  "release_hash_id": "abc123",
  "release_id": "550e8400-e29b-41d4-a716-446655440000",
  "release_version": "1.0.0",
  "team_identifier": 42,
  "update_id": "update_001",
  "metadata_description": "Initial release for the project."
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
