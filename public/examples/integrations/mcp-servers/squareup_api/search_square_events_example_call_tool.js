import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.SearchSquareEvents";

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
  "end_time_range": "2023-10-31T23:59:59Z",
  "filter_by_location_ids": [
    "loc_123",
    "loc_456"
  ],
  "filter_event_types": [
    "payment",
    "refund"
  ],
  "maximum_events_per_page": 50,
  "merchant_ids_filter": [
    "merch_789"
  ],
  "pagination_cursor": "cursor_abc",
  "sort_key_for_event_search": "DEFAULT",
  "sort_order": "ASC",
  "time_range_start": "2023-10-01T00:00:00Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
