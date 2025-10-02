import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "BoxApi.GetBoxEvents";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "event_stream_type": "admin_logs",
  "event_stream_start_position": "0",
  "event_limit": 100,
  "event_type_filter": [
    "LOGIN",
    "ITEM_CREATE",
    "ITEM_UPLOAD"
  ],
  "event_start_date": "2024-01-01T00:00:00Z",
  "event_time_upper_bound": "2024-06-30T23:59:59Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
