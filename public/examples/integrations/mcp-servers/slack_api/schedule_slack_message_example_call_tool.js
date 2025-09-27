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
  "slack_channel_id_or_name": "#project-updates",
  "schedule_time_unix_timestamp": 1767225600,
  "structured_blocks_json": "%5B%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22Daily%20standup%20reminder%20%E2%9C%85%22%7D%7D%5D",
  "message_text": "Reminder: daily standup in 15 minutes. Please post your updates.",
  "enable_group_linking": false,
  "make_reply_visible_to_everyone": false,
  "enable_link_unfurling": true,
  "disable_unfurling_of_media_content": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
