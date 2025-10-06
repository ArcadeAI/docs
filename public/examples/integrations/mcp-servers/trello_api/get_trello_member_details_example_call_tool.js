import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.GetTrelloMemberDetails";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "member_id_or_username": "alice.smith",
  "include_actions_details": "all",
  "include_boards_details": "all",
  "board_background_options": "custom",
  "boards_invited_filter": "open,public",
  "boards_invited_fields": "id,name,desc",
  "include_card_details": "all",
  "include_custom_board_backgrounds": "all",
  "include_custom_emoji": "none",
  "include_custom_stickers": "none",
  "member_detail_fields": "all",
  "include_notifications": "none",
  "organizations_inclusion": "members",
  "organization_fields": "id,name",
  "invited_organizations_scope": "public",
  "organization_fields_invited": "id,name",
  "include_tokens": "none",
  "include_board_stars": true,
  "include_paid_account_info_in_workspace": false,
  "include_paid_account_info": false,
  "include_saved_searches": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
