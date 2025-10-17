import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.GetBookingList";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "results_per_page_limit": 25,
  "pagination_cursor": "abc123cursor",
  "specific_customer_id": "cust_98765",
  "team_member_id": "tm_12345",
  "specific_location_id": "loc_001",
  "earliest_start_time": "2025-10-01T08:00:00Z",
  "latest_start_time": "2025-10-31T23:59:59Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
