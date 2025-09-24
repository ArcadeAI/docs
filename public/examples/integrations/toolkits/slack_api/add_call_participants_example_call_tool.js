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
  "call_id": "C12345678",
  "participant_users": [
    {
      "slack_id": "U23456789",
      "display_name": "Alice Chen",
      "avatar_url": "https://example.com/alice.jpg"
    },
    {
      "external_id": "external-987",
      "display_name": "Bob Martín",
      "avatar_url": "https://example.com/bob.png"
    }
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
