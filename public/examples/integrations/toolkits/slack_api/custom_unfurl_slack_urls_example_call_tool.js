import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.CustomUnfurlSlackUrls";

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
  "channel_id": "C1234567890",
  "message_timestamp": "1623864557.000200",
  "unfurl_url_map": "{\"https://example.com/item/42\": {\"attachments\": [{\"text\": \"Item 42 details\",\"actions\": [{\"type\": \"button\",\"text\": \"View\",\"url\": \"https://example.com/item/42\"}] }]}}",
  "authentication_invitation_message": "Please *connect* your account to view detailed previews. <https://example.com/auth|Authenticate here>",
  "custom_authentication_url": "https://example.com/auth?return_to=%2Fapp",
  "user_authentication_blocks": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Click below to connect your account.\"}},{\"type\":\"actions\",\"elements\":[{\"type\":\"button\",\"text\":{\"type\":\"plain_text\",\"text\":\"Authenticate\"},\"url\":\"https://example.com/auth\"}]}]",
  "unfurl_link_id": "LNK-98765",
  "link_source": "conversations_history",
  "require_user_authentication": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
