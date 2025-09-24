import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.SendEphemeralMessageSlack";

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
  "target_channel": "C1234567890",
  "recipient_user_id": "U2345678901",
  "structured_blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Hey <@U2345678901>, here's an update just for you."
      }
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "View Details"
          },
          "value": "view_details",
          "action_id": "view_details"
        }
      ]
    }
  ],
  "message_icon_emoji": ":bell:",
  "ephemeral_message_text": "Quick update: your report is ready.",
  "bot_username": "notify-bot",
  "link_names_auto_link": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
