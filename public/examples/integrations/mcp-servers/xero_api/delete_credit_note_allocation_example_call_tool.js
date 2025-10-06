import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.DeleteCreditNoteAllocation";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "credit_note_unique_id": "c9f1e8b2-4a6d-4f3b-9a2e-1b2c3d4e5f60",
  "allocation_id": "a7d3f9b1-2c4e-4a8b-9f0d-6e7b8c9d0e1f",
  "xero_tenant_id": "b2d3c4e5-6789-0123-4567-89abcdef0123"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
