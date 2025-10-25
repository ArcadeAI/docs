import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PagerdutyApi.ListExistingIncidents";

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
  "additional_details_to_include": "acknowledgers",
  "assigned_user_ids": [
    "user123",
    "user456"
  ],
  "end_date_range": "2023-10-31",
  "filter_by_team_ids": [
    "team1",
    "team2"
  ],
  "incident_statuses": "triggered,acknowledged",
  "include_total_in_response": true,
  "pagination_offset": 0,
  "results_per_page": 50,
  "service_ids": [
    "service1",
    "service2"
  ],
  "sort_incidents_by": [
    "created_at:desc"
  ],
  "start_date_range": "2023-09-01"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
