import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.RetrievePurchaseOrders";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "xero_tenant_id": "a1b2c3d4-tenant-0001",
  "filter_by_status": "AUTHORISED",
  "filter_by_start_date": "2025-01-01",
  "filter_by_end_date": "2025-09-30",
  "order_by_element": "Date",
  "page_number": 1,
  "records_per_page": 50,
  "modified_since_timestamp": "2025-01-01T00:00:00Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
