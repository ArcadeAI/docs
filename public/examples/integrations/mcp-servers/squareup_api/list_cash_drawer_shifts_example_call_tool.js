import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.ListCashDrawerShifts";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "location_identifier": "loc_98765",
  "sort_order_for_listing": "DESC",
  "query_start_time": "2025-10-01T00:00:00Z",
  "exclusive_end_date": "2025-10-07T00:00:00Z",
  "result_limit": 100,
  "next_page_cursor": "eyJwYWdlIjoxfQ=="
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
