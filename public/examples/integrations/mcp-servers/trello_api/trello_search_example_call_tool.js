import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.TrelloSearch";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "search_query": "release notes board",
  "board_filter": "mine",
  "search_object_types": "boards,cards",
  "board_fields_to_include": "name,url",
  "maximum_boards_to_return": 10,
  "card_fields_selection": "name,due,labels",
  "maximum_cards_to_return": 50,
  "cards_page_number": 1,
  "include_card_attachments": "cover",
  "organization_fields": "name,url",
  "maximum_workspaces_to_return": 5,
  "member_fields": "fullName,username,avatarHash",
  "maximum_members_to_return": 20,
  "include_board_organization": true,
  "include_parent_board_with_card_results": true,
  "include_parent_list_with_card_results": true,
  "include_card_members": true,
  "include_card_stickers": false,
  "partial_match_search": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
