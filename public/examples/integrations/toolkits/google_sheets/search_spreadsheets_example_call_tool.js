import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GoogleSheets.SearchSpreadsheets";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "spreadsheet_contains": [
    "budget",
    "Q3"
  ],
  "spreadsheet_not_contains": [
    "draft"
  ],
  "search_only_in_shared_drive_id": "0AOpXyz123DEFghIJK",
  "include_shared_drives": true,
  "include_organization_domain_spreadsheets": true,
  "order_by": [
    "modifiedTime desc"
  ],
  "limit": 25,
  "pagination_token": "tok123"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
