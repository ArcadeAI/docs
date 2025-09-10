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
  "user_group_id": "S01234567",
  "default_channel_ids": [
    "C0123ABCD",
    "C0456EFGH"
  ],
  "additional_channel_ids": [
    "C0999ZZZZ"
  ],
  "user_group_description": "Frontend engineers responsible for UI components and UX",
  "user_group_handle": "frontend-engineers",
  "user_group_name": "Frontend Engineers",
  "team_id_for_org_token": "T12345678",
  "include_user_count": true,
  "enable_sidebar_section": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
