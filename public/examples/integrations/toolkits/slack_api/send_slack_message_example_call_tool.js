import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.SendSlackMessage";

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
  "target_channel_id_or_name": "#engineering",
  "message_text": "Deployment succeeded for service-api v2.1. Rollout complete.",
  "structured_blocks": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"*:white_check_mark: Deployment Complete*\\nservice-api v2.1 rolled out to production.\"}},{\"type\":\"context\",\"elements\":[{\"type\":\"mrkdwn\",\"text\":\"Triggered by @deployer\"}]}]",
  "emoji_icon_for_message": ":rocket:",
  "bot_username": "deploy-bot",
  "broadcast_reply_to_channel": false,
  "enable_slack_markup_parsing": true,
  "enable_unfurling_text_content": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
