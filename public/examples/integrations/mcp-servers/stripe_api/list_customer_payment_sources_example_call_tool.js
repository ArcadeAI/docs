import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.ListCustomerPaymentSources";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "customer_id": "cus_ABC123xyz",
  "max_payment_sources_to_return": 25,
  "filter_by_object_type": "card",
  "expand_response_fields": [
    "data.card",
    "data.billing_details"
  ],
  "pagination_start_cursor": "card_1JH2xyZ4aBcD",
  "pagination_ending_before": "card_1JH2wxY9zEfG"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
