import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.ScheduleSlackMessage";

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
  "slack_channel_id_or_name": "C024BE91L",
  "schedule_time_unix_timestamp": 1716201600,
  "message_text": "Reminder: stand-up meeting starts in 10 minutes. Please join the #standup channel.",
  "structured_blocks_json": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"*Stand-up Reminder*\\nPlease join the meeting in 10 minutes.\"}}]",
  "enable_group_linking": false,
  "enable_link_unfurling": true,
  "disable_unfurling_of_media_content": false,
  "make_reply_visible_to_everyone": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
