import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.GetEnterpriseUsers";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "enterprise_id": "ent_12345abcd",
  "active_since_date": "2025-01-01",
  "search_value_filter": "alice",
  "pagination_cursor": "cursor_0001",
  "licensed_members_only": true,
  "return_deactivated_members": false,
  "include_collaborators": false,
  "return_managed_members": true,
  "include_administrators_only": null
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
