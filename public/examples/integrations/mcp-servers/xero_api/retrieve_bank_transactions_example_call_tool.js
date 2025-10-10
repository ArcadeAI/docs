import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.RetrieveBankTransactions";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "xero_tenant_id": "123e4567-e89b-12d3-a456-426614174000",
  "filter_by_element": "Status==\"AUTHORISED\" AND Amount>0",
  "order_transactions_by": "Date DESC",
  "transaction_page_number": 1,
  "use_four_decimal_places": 1,
  "records_per_page": 50,
  "modified_since_timestamp": "2025-01-01T00:00:00Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
