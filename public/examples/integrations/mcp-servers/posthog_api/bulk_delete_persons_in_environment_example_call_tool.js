import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PosthogApi.BulkDeletePersonsInEnvironment";

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
  "mode": "execute",
  "target_project_id": "12345",
  "distinct_ids_to_delete": [
    "id1",
    "id2",
    "id3"
  ],
  "response_format": "json",
  "posthog_person_ids": [
    "ph_id1",
    "ph_id2"
  ],
  "delete_events": true,
  "request_body": "{\"ids\":[\"id1\",\"id2\"]}"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
