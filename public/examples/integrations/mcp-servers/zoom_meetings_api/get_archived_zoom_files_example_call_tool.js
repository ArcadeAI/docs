import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZoomMeetingsApi.GetArchivedZoomFiles";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "number_of_records_per_call": 50,
  "pagination_token": "eyJzaWQiOiJwYWdlMSIsImVkIjoiMTY5NjAwMDAwMCJ9",
  "query_start_date": "2025-09-25T00:00:00Z",
  "query_end_date": "2025-09-30T23:59:59Z",
  "query_date_type": "archive_complete_time",
  "filter_by_group_ids": "grp_123,grp_456"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
