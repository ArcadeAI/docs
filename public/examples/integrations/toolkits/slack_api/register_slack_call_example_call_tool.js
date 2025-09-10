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
  "unique_call_id": "ext-call-987654",
  "call_join_url": "https://meet.example.com/j/987654",
  "optional_human_readable_display_id": "MEET-987654",
  "desktop_app_join_url": "slack-call://open?call_id=987654",
  "call_start_timestamp": 1735689600,
  "call_title": "Weekly Sync",
  "call_creator_user_id": "U12345678",
  "participants_info": [
    {
      "slack_id": "U11111111",
      "external_id": "alice@example.com",
      "display_name": "Alice",
      "avatar_url": "https://example.com/avatars/alice.png"
    },
    {
      "slack_id": "U22222222",
      "external_id": "bob@example.com",
      "display_name": "Bob",
      "avatar_url": "https://example.com/avatars/bob.png"
    }
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
