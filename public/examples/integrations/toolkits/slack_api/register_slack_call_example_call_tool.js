import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.RegisterSlackCall";

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
  "unique_call_id": "call_3p_7890",
  "call_join_url": "https://meet.example.com/j/abc123",
  "optional_human_readable_display_id": "TeamSync-0925",
  "desktop_app_join_url": "slackcall://launch?room=abc123",
  "call_start_timestamp": 1764364800,
  "call_title": "Weekly Team Sync",
  "call_creator_user_id": "U12345678",
  "participants_info": [
    {
      "slack_id": "U23456789",
      "external_id": "ext_001",
      "display_name": "Alice Johnson",
      "avatar_url": "https://example.com/avatars/alice.jpg"
    },
    {
      "slack_id": "U34567890",
      "external_id": "ext_002",
      "display_name": "Bob Lee",
      "avatar_url": "https://example.com/avatars/bob.jpg"
    }
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
