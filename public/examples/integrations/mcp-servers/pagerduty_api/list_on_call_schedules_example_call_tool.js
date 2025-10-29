import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PagerdutyApi.ListOnCallSchedules";

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
  "additional_details_to_include": "schedule_layers",
  "end_date_range": "2023-11-15",
  "filter_by_name": "John Doe",
  "include_total_in_pagination": true,
  "pagination_offset": 0,
  "render_results_in_time_zone": "UTC",
  "results_per_page": 10,
  "start_date_for_schedule_entries": "2023-11-01",
  "user_id_for_next_oncall": "user_12345"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
