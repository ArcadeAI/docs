import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZoomMeetingsApi.GetMeetingActivityLogs";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "start_date": "2025-09-01",
  "end_date": "2025-09-30",
  "activity_type": "Meeting Started",
  "number_of_records_per_call": 100,
  "pagination_token": "abc123token",
  "meeting_number": "123456789",
  "operator_name_or_email": "alice@example.com"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
