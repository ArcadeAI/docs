import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZohoBooksApi.ListAccountTransactions";

// Start the authorization process
const authResponse = await client.tools.authorize({
  tool_name: TOOL_NAME,
  user_id: USER_ID,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "organization_id": "org_12345",
  "account_id": "acc_67890",
  "transaction_date_range": "2023-01-01 to 2023-12-31",
  "amount_range": 1000,
  "filter_by_account_type": "AccountType.Active",
  "transaction_type": "invoice",
  "sort_by": "account_name",
  "page_number": 1,
  "records_per_page": 50
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
