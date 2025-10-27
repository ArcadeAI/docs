import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PosthogApi.UpdateEnvironmentGroupProperty";

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
  "creation_timestamp": "2023-10-05T14:48:00Z",
  "environment_group_key": "env-group-123",
  "group_key": "group-456",
  "group_type_identifier": 1,
  "group_type_index_identifier": 0,
  "project_id": "project-789",
  "group_properties": "{\"property1\": \"value1\", \"property2\": \"value2\"}"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
