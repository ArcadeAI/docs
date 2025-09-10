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
  "message_timestamp": "1623855600.000200",
  "unfurl_url_map": "%7B%22https%3A%2F%2Fexample.com%2Fitem%2F42%22%3A%7B%22attachments%22%3A%5B%7B%22fallback%22%3A%22Item%2042%20details%22%2C%22title%22%3A%22Item%2042%22%2C%22text%22%3A%22Short%20description%20of%20item%2042%22%7D%5D%7D%7D",
  "authentication_invitation_message": "*Please authenticate* to see a rich preview of this link.",
  "custom_authentication_url": "https%3A%2F%2Fexample.com%2Fauth%3Freturn_to%3Dslack",
  "user_authentication_blocks": [
    "{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"_Authenticate to enable unfurls_\"}}"
  ],
  "unfurl_link_id": "LNK-987654",
  "link_source": "conversations_history",
  "require_user_authentication": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
