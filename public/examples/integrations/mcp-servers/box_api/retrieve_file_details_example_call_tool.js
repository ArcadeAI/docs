import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "BoxApi.RetrieveFileDetails";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "file_identifier": "12345",
  "included_file_attributes": [
    "name",
    "size",
    "metadata:global.key1"
  ],
  "etag_conditional_retrieval": "0xabcdef1234567890",
  "shared_link_with_optional_password": "shared_link=https://example.app.box.com/s/abc123&shared_link_password=secret",
  "file_representations_request": "[jpg?dimensions=128x128][pdf?max_width=1024]"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
