import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PagerdutyApi.ListOnCallEntries";

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
  "additional_details_to_include": "escalation policies",
  "end_time_for_on_call_search": "2023-12-31T23:59:59Z",
  "filter_by_escalation_policy_ids": [
    "policy1",
    "policy2"
  ],
  "filter_user_ids": [
    "user123",
    "user456"
  ],
  "include_total_in_response": true,
  "pagination_offset": 0,
  "results_per_page": 10,
  "results_time_zone": "UTC",
  "return_earliest_on_call": false,
  "schedule_ids_filter": [
    "schedule1",
    null
  ],
  "start_time_range": "2023-12-01T00:00:00Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
