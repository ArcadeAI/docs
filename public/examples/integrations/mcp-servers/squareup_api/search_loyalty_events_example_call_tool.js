import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.SearchLoyaltyEvents";

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
  "end_time": "2023-10-31T23:59:59Z",
  "location_ids_for_events_query": [
    "loc_123",
    "loc_456"
  ],
  "loyalty_account_id": "acc_789",
  "loyalty_event_types": [
    "points_earned",
    "points_redeemed"
  ],
  "max_results_count": 10,
  "order_id_filter": "order_001",
  "pagination_cursor": "cursor_abc",
  "start_datetime": "2023-10-01T00:00:00Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
