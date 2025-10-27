import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PosthogApi.FileSystemShortcutCreate";

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
  "file_system_shortcut_path": "/projects/my_project/shortcut",
  "project_id": "12345",
  "shortcut_creation_timestamp": "2023-10-01T12:00:00Z",
  "shortcut_id": "shortcut-001",
  "reference_id": "ref-001",
  "shortcut_type": "link",
  "shortcut_url": "http://example.com/resource"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
