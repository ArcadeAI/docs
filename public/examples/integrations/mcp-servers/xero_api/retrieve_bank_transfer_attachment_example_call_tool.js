import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.RetrieveBankTransferAttachment";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "bank_transfer_id": "b3f9c2d4-8a1e-4f2b-9c7a-2d5e6f7a8b90",
  "attachment_file_name": "receipt-2025-09-30.pdf",
  "xero_tenant_identifier": "a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78",
  "attachment_mime_type": "application/pdf"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
