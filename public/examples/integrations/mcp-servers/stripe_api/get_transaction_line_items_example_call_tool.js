import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetTransactionLineItems";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "transaction_id": "txn_1A2b3C4d5E6f",
  "pagination_ending_id": "li_9Z8y7X6w5V",
  "expand_fields": [
    "data.price.product",
    "data.tax_rates"
  ],
  "number_of_items_to_return": 5,
  "pagination_starting_after": "li_0A1b2C3d4E"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
