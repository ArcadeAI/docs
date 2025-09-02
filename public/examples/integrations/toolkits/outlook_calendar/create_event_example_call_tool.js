import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "OutlookCalendar.CreateEvent";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "subject": "Team Meeting",
  "body": "Discuss project updates and next steps.",
  "start_date_time": "2025-04-25T13:00:00",
  "end_date_time": "2025-04-25T14:00:00",
  "location": "Conference Room A",
  "attendee_emails": [
    "alice@example.com",
    "bob@example.com"
  ],
  "is_online_meeting": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
