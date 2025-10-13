import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.RetrieveSalesQuotes";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "xero_tenant_id": "tenant_abc123",
  "filter_start_date": "2025-01-01",
  "filter_date_to": "2025-09-30",
  "expiry_date_after": "2025-10-01",
  "filter_expiry_date_before": "2025-12-31",
  "contact_id": "contact_789",
  "quote_status": "SENT",
  "page_number": 1,
  "order_by_element": "Date",
  "quote_number_filter": "QU-042",
  "modified_since_timestamp": "2025-08-15T00:00:00Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
