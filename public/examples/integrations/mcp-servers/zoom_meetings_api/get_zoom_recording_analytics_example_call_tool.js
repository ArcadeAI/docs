import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZoomMeetingsApi.GetZoomRecordingAnalytics";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "meeting_or_webinar_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "records_per_page": 50,
  "pagination_token": "token_eyJpZCI6IjEyMyIsImV4cCI6MTY5",
  "start_date": "2025-09-01",
  "end_date": "2025-09-30",
  "analytics_detail_type": "by_view"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
