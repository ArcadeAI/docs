import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.RetrieveAccountAttachmentByFilename";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "account_id": "f8b2c9e4-3a1d-4b2f-9c7a-1e2d3f4a5b6c",
  "attachment_file_name": "invoice-12345.pdf",
  "tenant_identifier": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "mime_type_of_attachment": "application/pdf"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
