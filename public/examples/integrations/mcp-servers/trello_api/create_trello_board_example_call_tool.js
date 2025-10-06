import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.CreateTrelloBoard";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "board_name": "Website Redesign",
  "board_description": "Board to track website redesign tasks and milestones",
  "workspace_id_or_name": "Marketing Team",
  "enable_power_ups": "calendar",
  "board_permission_level": "org",
  "set_voting_permissions": "members",
  "comment_permissions": "members",
  "invitation_permission_level": "members",
  "board_background_color": "sky",
  "card_aging_type": "regular",
  "use_default_labels": true,
  "add_default_lists": true,
  "allow_self_join": false,
  "enable_card_covers": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
