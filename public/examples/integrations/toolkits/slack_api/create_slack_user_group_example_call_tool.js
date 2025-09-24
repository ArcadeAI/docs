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
  "user_group_name": "oncall-engineers",
  "default_channel_ids": [
    "C01234567",
    "C08901234"
  ],
  "custom_additional_channels": [
    "C05555555"
  ],
  "user_group_description": "Engineers responsible for on-call rotations and incident response.",
  "unique_mention_handle": "oncall",
  "team_id_for_user_group_creation": "T012ABCDEF",
  "include_user_count": true,
  "enable_display_as_sidebar_section": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
