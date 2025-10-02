import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetDebitReversalsList";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "financial_account_id": "fa_12345",
  "pagination_ending_before_cursor": "dr_abcde_prev",
  "fields_to_expand": [
    "received_debit",
    "transaction"
  ],
  "max_number_of_debit_reversals": 25,
  "filter_by_received_debit_id": "rd_67890",
  "resolution_status": "lost",
  "pagination_starting_after_cursor": "dr_fghij_next",
  "filter_by_status": "completed"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
