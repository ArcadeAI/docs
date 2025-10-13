import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.GetBalanceSheetReport";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "xero_tenant_identifier": "a1b2c3d4-tenant",
  "report_date": "2025-09-30",
  "number_of_periods": 3,
  "comparison_timeframe": "MONTH",
  "balance_sheet_tracking_option_id_1": "track-01",
  "tracking_option_id_2": "track-02",
  "use_standard_layout": true,
  "return_cash_basis": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
