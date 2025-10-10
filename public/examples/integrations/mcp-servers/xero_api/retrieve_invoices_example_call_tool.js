import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.RetrieveInvoices";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "xero_tenant_id": "123e4567-e89b-12d3-a456-426614174000",
  "filter_by_condition": "Status==\"AUTHORISED\" AND Date>=DateTime(2025,01,01)",
  "order_by": "Date DESC",
  "invoice_ids": [
    "inv-001",
    "inv-002"
  ],
  "filter_by_invoice_numbers": [
    "1001",
    "1002"
  ],
  "filter_contact_ids": [
    "c-abc123",
    "c-def456"
  ],
  "filter_by_statuses": [
    "AUTHORISED",
    "PAID"
  ],
  "page_number": 1,
  "unit_decimal_places": 4,
  "records_per_page": 50,
  "search_term": "consulting",
  "modified_since_timestamp": "2025-01-01T00:00:00",
  "include_archived_invoices": false,
  "filter_by_created_by_my_app": true,
  "retrieve_summary_only": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
