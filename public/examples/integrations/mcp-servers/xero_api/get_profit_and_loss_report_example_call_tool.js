import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.GetProfitAndLossReport";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "tenant_identifier": "abc123-tenant",
  "from_date": "2024-01-01",
  "end_date": "2024-06-30",
  "number_of_comparison_periods": 2,
  "comparison_timeframe": "MONTH",
  "tracking_category_id": "tc-987",
  "secondary_tracking_category_id": "tc-654",
  "tracking_option_1_id": "opt-12",
  "tracking_option_id_2": "opt-34",
  "return_standard_layout": true,
  "return_cash_basis_only": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
