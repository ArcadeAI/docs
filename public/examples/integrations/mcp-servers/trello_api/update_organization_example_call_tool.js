import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.UpdateOrganization";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "organization_id_or_name": "team-alpha",
  "new_organization_name": "team_alpha_01",
  "new_display_name": "Team Alpha",
  "organization_description": "Project coordination and planning workspace.",
  "organization_website_url": "https://team-alpha.example.com",
  "google_apps_domain": "alpha.example.com",
  "google_apps_version": 2,
  "workspace_board_visibility_restriction": "admin",
  "private_board_visibility_restriction": "org",
  "public_board_visibility_restriction": "none",
  "organization_invite_restriction_email": "*@example.com",
  "workspace_visibility": "private",
  "allow_external_members": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
