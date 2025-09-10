import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.AddCallParticipants";

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
  "call_id": "R1234567890",
  "participant_users": [
    {
      "slack_id": "U2345678901",
      "display_name": "Ava Chen",
      "avatar_url": "https://example.com/avatars/ava.png"
    },
    {
      "external_id": "ext-98765",
      "display_name": "Dev Team Bot",
      "avatar_url": "https://example.com/avatars/bot.png"
    },
    {
      "slack_id": "U3456789012",
      "display_name": "Liam Patel"
    }
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
