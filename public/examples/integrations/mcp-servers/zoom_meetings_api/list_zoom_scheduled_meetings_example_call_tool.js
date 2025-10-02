import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZoomMeetingsApi.ListZoomScheduledMeetings";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "zoom_user_identifier": "me",
  "meeting_type": "scheduled",
  "records_per_page": 30,
  "pagination_next_page_token": "abc123token",
  "current_page_number": 1,
  "start_date": "2025-01-01",
  "end_date": "2025-06-30",
  "meeting_timezone": "America/Los_Angeles"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
