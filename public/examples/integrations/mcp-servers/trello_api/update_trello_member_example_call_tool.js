import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.UpdateTrelloMember";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "member_identifier": "5f8d0d55a0b1c23e7f1a2b3c",
  "new_member_full_name": "Alex Rivera",
  "member_initials": "AR",
  "new_username": "alex_rivera",
  "member_bio": "Product manager focused on UX and agile delivery.",
  "avatar_source_option": "upload",
  "preferred_locale": "en-US",
  "update_interval_minutes": 60,
  "enable_color_blind_mode": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
