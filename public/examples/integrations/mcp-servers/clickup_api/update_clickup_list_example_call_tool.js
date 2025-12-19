import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ClickupApi.UpdateClickupList";

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
  "list_identifier": "12345",
  "list_name": "Updated List Name",
  "formatted_list_description": "## New Description\nThis is an updated description.",
  "include_due_date_time": true,
  "list_assignee_id": "user_67890",
  "list_color": "#FF5733",
  "list_due_date": 1699996800000,
  "list_priority": 1
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
