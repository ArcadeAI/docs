import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.GetTrelloNotification";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "notification_id": "5f7c8b2e9a1d3b4f2c6e7a90",
  "board_fields_to_include": "id,name,desc",
  "card_fields_to_include": "id,name,due,labels,shortUrl",
  "notification_fields": "id,type,unread,date",
  "member_fields_inclusion": "id,username,fullName",
  "include_member_creator_fields": "all",
  "organization_field_selection": "id,name",
  "include_board_object": true,
  "include_card": true,
  "include_display": true,
  "include_entities": false,
  "include_list_object": true,
  "include_member": true,
  "include_member_creator_object": true,
  "include_organization": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
