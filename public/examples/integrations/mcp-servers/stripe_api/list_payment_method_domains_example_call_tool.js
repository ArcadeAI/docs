import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.ListPaymentMethodDomains";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "domain_name": "payments.example.com",
  "pagination_cursor_ending_before": "cursor_abc123",
  "fields_to_expand": [
    "webhooks",
    "settings"
  ],
  "limit_number_of_returned_objects": 25,
  "pagination_cursor_starting_after": "cursor_def456",
  "include_enabled_domains": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
