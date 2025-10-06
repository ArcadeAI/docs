import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.UpdateTrelloBoard";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "board_id": "5f8d0a12b3c4e56789ab0123",
  "board_new_name": "Sprint Planning Board",
  "new_board_description": "Board for tracking sprint tasks and planning.",
  "user_subscribed_status": "true",
  "workspace_id_for_board": "60d21b4667d0d8992e610c85",
  "board_permission_level": "private",
  "board_invitation_permission": "admins",
  "voting_permission": "members",
  "comment_permission": "members",
  "board_background_id": "blue",
  "card_aging_preference": "regular",
  "green_label_name": "Low Priority",
  "yellow_label_name": "Medium Priority",
  "orange_label_name": "High Priority",
  "red_label_name": "Critical",
  "purple_label_name": "Blocked",
  "blue_label_name": "Research",
  "is_board_closed": false,
  "allow_workspace_self_join": true,
  "display_card_covers": true,
  "hide_votes": false,
  "enable_calendar_feed": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
