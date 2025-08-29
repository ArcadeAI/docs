import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Clickup.GetTasksByScope";

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
  "workspace_id": "123456",
  "scope": "lists",
  "item_ids": [
    "78910"
  ],
  "offset": 0,
  "limit": 20,
  "order_by": "due_date",
  "should_sort_by_reverse": true,
  "statuses": [
    "in progress",
    "review"
  ],
  "include_closed": false,
  "due_date_gt": "2025-09-01",
  "due_date_lt": "2025-09-30",
  "date_created_gt": "2025-01-01",
  "date_created_lt": "2025-08-01"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
