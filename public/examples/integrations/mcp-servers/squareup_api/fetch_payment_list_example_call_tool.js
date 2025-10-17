import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.FetchPaymentList";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "start_time_for_payment_retrieval": "2024-10-01T00:00:00Z",
  "payment_retrieval_end_time": "2024-10-13T00:00:00Z",
  "order_results_by": "DESC",
  "max_results_per_page": 50,
  "limit_results_by_location": "LZ12345ABCD",
  "exact_payment_amount": 2500,
  "payment_card_last_four_digits": "4242",
  "payment_card_brand": "VISA",
  "include_offline_payments": false,
  "sort_results_by_field": "CREATED_AT"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
