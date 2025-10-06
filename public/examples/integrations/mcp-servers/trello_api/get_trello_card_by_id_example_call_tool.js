import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.GetTrelloCardById";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "card_id": "5f6d7a8b9c0d1e2f3a4b5c6d",
  "card_fields_to_retrieve": "all",
  "include_action_details": "all",
  "include_attachments": "cover",
  "attachment_fields": "all",
  "member_fields_selection": "avatarHash,fullName,username",
  "member_voted_fields": "fullName,username",
  "include_checklists": "all",
  "checklist_fields": "all",
  "board_fields_to_return": "name,desc,idOrganization",
  "sticker_fields": "all",
  "include_card_members": true,
  "include_members_who_voted": false,
  "include_check_item_states": true,
  "include_board_object": true,
  "include_lists_nested_resource": false,
  "include_plugin_data": false,
  "include_stickers": true,
  "include_custom_field_items": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
