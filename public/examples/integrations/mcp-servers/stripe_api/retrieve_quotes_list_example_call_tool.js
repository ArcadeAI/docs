import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.RetrieveQuotesList";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "customer_id": "cus_ABC123xyz",
  "result_limit": 25,
  "quote_status": "open",
  "fields_to_expand": [
    "data.customer",
    "data.line_items"
  ],
  "pagination_starting_after": "qt_00000000000001",
  "pagination_ending_before_cursor": null,
  "test_clock_id": null
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
