import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.GetTrelloAction";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "action_id": "64b8f2a3e1c4b12d9f0a7b21",
  "action_fields": "type,date,data,memberCreator",
  "member_fields_list": "id,username,fullName",
  "member_creator_fields": "all",
  "include_display": true,
  "include_entities": true,
  "include_member": false,
  "include_action_creator": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
