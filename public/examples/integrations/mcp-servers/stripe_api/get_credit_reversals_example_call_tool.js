import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetCreditReversals";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "financial_account_id": "fa_12345ABCDE",
  "pagination_ending_before": "cr_98765XYZ",
  "fields_to_expand": [
    "received_credit",
    "financial_account"
  ],
  "max_objects_returned": 25,
  "filter_by_received_credit_id": "rc_54321LMN",
  "pagination_starting_after_cursor": "cr_12345NEXT",
  "credit_reversal_status": "processing"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
