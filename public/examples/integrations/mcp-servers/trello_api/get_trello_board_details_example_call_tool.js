import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.GetTrelloBoardDetails";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "board_id": "5f8d0d3a9c1b2a00123abcd4",
  "include_actions": "true",
  "board_stars_filter": "none",
  "include_card_details": "true",
  "include_checklists": "true",
  "board_fields_to_include": "name,url,desc",
  "include_labels_resource": "true",
  "include_lists": "all",
  "include_members": "true",
  "include_memberships": "true",
  "include_card_plugin_data": false,
  "include_custom_fields": true,
  "include_plugin_data": false,
  "include_organization": true,
  "include_organization_plugin_data": false,
  "include_my_preferences": true,
  "include_tags": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
