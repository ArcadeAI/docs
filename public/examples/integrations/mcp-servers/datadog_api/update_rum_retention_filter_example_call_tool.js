import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "DatadogApi.UpdateRumRetentionFilter";

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
  "filter_id": "123e4567-e89b-12d3-a456-426614174000",
  "retention_filter_id": "abc123",
  "rum_application_id": "app456",
  "enable_retention_filter": true,
  "filter_name": "User Session Filter",
  "resource_type": "retention_filters",
  "rum_event_type_filter": "session",
  "rum_retention_filter_query": "status:active",
  "sample_rate": 50
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
