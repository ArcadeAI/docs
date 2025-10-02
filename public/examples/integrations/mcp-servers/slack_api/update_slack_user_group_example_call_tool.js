import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.UpdateSlackUserGroup";

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
  "user_group_id": "S12345G",
  "default_channel_ids": [
    "C11111",
    "C22222"
  ],
  "additional_channel_ids": [
    "C33333"
  ],
  "user_group_description": "On-call engineers for backend services",
  "user_group_handle": "oncall-backend",
  "user_group_name": "Backend Oncall",
  "team_id_for_org_token": "T98765",
  "include_user_count": true,
  "enable_sidebar_section": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
