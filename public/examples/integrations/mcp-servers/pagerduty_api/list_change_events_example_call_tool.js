import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PagerdutyApi.ListChangeEvents";

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
  "end_date_utc": "2023-10-31T23:59:59Z",
  "include_total_in_pagination": true,
  "integration_ids": [
    "int_123",
    "int_456"
  ],
  "pagination_offset": 0,
  "results_per_page": 10,
  "start_date_time_utc": "2023-10-01T00:00:00Z",
  "team_ids": [
    "team_789"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
