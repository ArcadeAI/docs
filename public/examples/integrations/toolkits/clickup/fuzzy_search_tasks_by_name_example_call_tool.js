import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Clickup.FuzzySearchTasksByName";

// Start the authorization process
const authResponse = await client.tools.authorize({
    tool_name: TOOL_NAME,
    user_id: USER_ID
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "name_to_search": "signup form validation",
  "workspace_id": "987654321",
  "scan_size": 200,
  "include_closed": false,
  "statuses": [
    "in progress",
    "open"
  ],
  "assignee_ids": [
    "123",
    "456"
  ],
  "space_ids": [
    "111"
  ],
  "folder_ids": [
    "222"
  ],
  "list_ids": [
    "333"
  ],
  "limit": 10
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
