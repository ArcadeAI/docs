import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.FetchInvoicePayments";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "xero_tenant_identifier": "a1b2c3d4-5678-90ab-cdef-EXAMPLETENANT",
  "filter_condition": "Status==\"AUTHORISED\" AND Amount>100",
  "order_by": "Date DESC",
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
