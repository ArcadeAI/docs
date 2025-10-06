import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.FetchAllXeroContacts";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "tenant_identifier": "org_abc123",
  "filter_by_element": "EmailAddress.EndsWith('@example.com')",
  "sort_order": "Name ASC",
  "contact_ids": [
    "c1f8a9b2-3d4e-11ec-9bbc-0242ac130002",
    "d2f9b0c3-4e5f-11ec-9bbc-0242ac130003"
  ],
  "pagination_page_number": 1,
  "search_term": "Acme",
  "records_per_page": 50,
  "modified_since_timestamp": "2025-01-01T00:00:00Z",
  "include_archived_contacts": false,
  "retrieve_summary_only_contacts": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
