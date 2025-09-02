import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GoogleCalendar.CreateEvent";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "summary": "Team Meeting",
  "start_datetime": "2024-12-01T10:00:00",
  "end_datetime": "2024-12-01T11:00:00",
  "calendar_id": "primary",
  "description": "Monthly team sync to discuss project updates",
  "location": "Conference Room A",
  "visibility": "public",
  "attendee_emails": [
    "alice@example.com",
    "bob@example.com"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
