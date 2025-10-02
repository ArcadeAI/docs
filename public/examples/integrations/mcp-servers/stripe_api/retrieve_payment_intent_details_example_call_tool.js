import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.RetrievePaymentIntentDetails";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "payment_intent_id": "pi_1Hh1YZ2eZvKYlo2C3qX7a9b0",
  "payment_intent_client_secret": "pi_1Hh1YZ2eZvKYlo2C3qX7a9b0_secret_123",
  "fields_to_expand": [
    "charges.data.balance_transaction",
    "latest_charge.payment_method_details"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
