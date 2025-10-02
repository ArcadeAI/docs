import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetCustomerPaymentMethods";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "customer_id": "cus_ABC123xyz",
  "enable_redisplay_setting": "limited",
  "pagination_ending_before_id": "pm_000987",
  "response_fields_to_expand": [
    "data.card",
    "data.billing_details"
  ],
  "max_payment_methods_returned": 20,
  "pagination_starting_after_cursor": "pm_000450",
  "payment_method_type_filter": "card"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
