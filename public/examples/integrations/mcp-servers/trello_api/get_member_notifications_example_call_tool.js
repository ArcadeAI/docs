import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.GetMemberNotifications";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "member_id_or_username": "jane.doe",
  "notification_filter": "commentCard,addMemberToCard",
  "notification_read_status": "unread",
  "notification_fields": "all",
  "notification_limit": 50,
  "notification_page": 1,
  "notification_id_before": "5f8d0d55a1b2c3d4e5f6a7b8",
  "since_notification_id": "5f8d0d55a1b2c3d4e5f6a7b0",
  "member_creator_fields": "fullName,username",
  "include_entities": true,
  "show_display": true,
  "include_member_creator": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
