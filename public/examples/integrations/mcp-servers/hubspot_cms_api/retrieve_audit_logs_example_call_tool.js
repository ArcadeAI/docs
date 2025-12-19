import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "HubspotCmsApi.RetrieveAuditLogs";

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
  "event_types": [
    "CREATED",
    "UPDATED"
  ],
  "filter_by_object_ids": [
    "123",
    "456"
  ],
  "filter_by_object_type": [
    "BLOG",
    "LANDING_PAGE"
  ],
  "number_of_logs_to_return": 10,
  "sort_direction": [
    "desc"
  ],
  "timestamp_after": "2023-01-01T00:00:00Z",
  "user_ids_to_filter": [
    "user1",
    "user2"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
