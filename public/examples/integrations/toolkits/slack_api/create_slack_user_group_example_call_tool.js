import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.CreateSlackUserGroup";

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
  "user_group_name": "dev-frontend",
  "default_channel_ids": [
    "C01234567",
    "C08976543"
  ],
  "custom_additional_channels": [
    "C01234567"
  ],
  "user_group_description": "Frontend developers working on web UI",
  "unique_mention_handle": "dev_frontend",
  "team_id_for_user_group_creation": "T12345678",
  "include_user_count": true,
  "enable_display_as_sidebar_section": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
