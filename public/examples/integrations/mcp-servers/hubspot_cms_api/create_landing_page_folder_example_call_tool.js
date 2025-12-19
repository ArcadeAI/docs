import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "HubspotCmsApi.CreateLandingPageFolder";

// Start the authorization process
const authResponse = await client.tools.authorize({
  tool_name: TOOL_NAME,
  user_id: USER_ID,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "deletion_timestamp": "",
  "folder_category": 1,
  "folder_creation_date": "2023-10-01T12:00:00Z",
  "folder_name": "New Landing Page Folder",
  "folder_unique_id": "folder-12345",
  "parent_folder_id": 0,
  "updated_timestamp": "2023-10-01T12:00:00Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
