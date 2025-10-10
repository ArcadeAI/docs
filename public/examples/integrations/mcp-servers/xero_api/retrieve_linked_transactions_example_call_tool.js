import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.RetrieveLinkedTransactions";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "tenant_identifier": "a1b2c3d4-tenant",
  "page_number": 1,
  "linked_transaction_id": "ltx-987654",
  "source_transaction_id": "src-inv-12345",
  "filter_by_contact_id": "ct-555aaa",
  "filter_by_status": "AUTHORISED",
  "filter_by_target_transaction_id": "tgt-inv-67890"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
