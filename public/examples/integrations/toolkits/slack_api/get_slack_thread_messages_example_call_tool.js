import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.GetSlackThreadMessages";

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
  "conversation_id": "C1234567890",
  "thread_message_timestamp": "1622547800.000200",
  "pagination_cursor": "dXNlcjpVMDYxTkZUQw==",
  "latest_message_timestamp": "1622551400",
  "maximum_items_to_return": 25,
  "start_time_unix_timestamp": "1622540000",
  "include_all_message_metadata": true,
  "include_boundary_timestamps": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
