import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.ListPaymentRefunds";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "start_time_for_refund_retrieval": "2024-10-01T00:00:00Z",
  "refund_end_time": "2024-10-13T00:00:00Z",
  "results_sort_order": "DESC",
  "pagination_cursor": "cursor_ABC123",
  "limit_results_to_location": "LOCATION_987",
  "refund_status_filter": "COMPLETED",
  "payment_source_type": "CARD",
  "max_results_per_page": 50,
  "updated_at_start_time": "2024-10-01T00:00:00Z",
  "updated_at_end_time": "2024-10-13T00:00:00Z",
  "sort_results_by_field": "CREATED_AT"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
