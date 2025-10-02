import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetCreditBalanceTransactions";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "customer_id": "cus_ABC123xyz",
  "credit_grant_id": "cgrant_01F2gh",
  "pagination_ending_cursor": "cbtxn_0001",
  "fields_to_expand": [
    "credit_grant",
    "invoice"
  ],
  "max_transactions_to_return": 25,
  "pagination_starting_after": "cbtxn_0025"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
