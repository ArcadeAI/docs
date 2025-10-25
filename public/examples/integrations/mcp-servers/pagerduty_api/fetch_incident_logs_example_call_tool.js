import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PagerdutyApi.FetchIncidentLogs";

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
  "additional_models_to_include": "incidents, services",
  "include_total_in_pagination": true,
  "pagination_offset": 10,
  "render_results_in_time_zone": "UTC",
  "results_per_page": 25,
  "return_important_changes_only": false,
  "search_end_date": "2023-10-31",
  "start_date_range": "2023-10-01",
  "team_ids": [
    "team1",
    "team2"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
