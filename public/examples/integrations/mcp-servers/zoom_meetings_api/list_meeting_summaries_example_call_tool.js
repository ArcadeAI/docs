import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZoomMeetingsApi.ListMeetingSummaries";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "number_of_records_per_call": 25,
  "pagination_next_page_token": "eyJwb2ludGVyIjoiMTIzdGVzdCIsImV4cCI6MTY5OTk5OTk5OX0",
  "start_date_utc": "2025-09-01T00:00:00Z",
  "end_date_utc": "2025-09-30T23:59:59Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
