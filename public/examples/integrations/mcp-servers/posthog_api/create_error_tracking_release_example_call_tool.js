import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PosthogApi.CreateErrorTrackingRelease";

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
  "error_release_id": "release-12345",
  "hash_identifier": "hash-abcde",
  "project_id": "project-67890",
  "project_name": "Sample Project",
  "release_creation_timestamp": "2023-10-02T14:48:00Z",
  "release_version": "1.0.0",
  "team_identifier": 42,
  "release_metadata": "Initial release for error tracking"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
