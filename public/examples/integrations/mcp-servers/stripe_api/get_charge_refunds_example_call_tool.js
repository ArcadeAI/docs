import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetChargeRefunds";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "charge_id": "ch_1K2xYzAbCdEfGhIj",
  "pagination_ending_before": "re_1J2kLmNoPqRsTuVw",
  "fields_to_expand": [
    "data.balance_transaction",
    "data.charge"
  ],
  "object_return_limit": 25,
  "pagination_starting_after": "re_1K3lMnOpQrStUvWx"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
