import { Arcade } from "@arcadeai/arcadejs";
// Required Google OAuth scopes:
// - https://www.googleapis.com/auth/calendar.events

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GoogleCalendar.UpdateEvent";

// Start the authorization process
const authResponse = await client.tools.authorize({
    tool_name: TOOL_NAME,
    user_id: USER_ID
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "event_id": "evt_12345",
  "updated_start_datetime": "2025-10-01T09:00:00",
  "updated_end_datetime": "2025-10-01T10:00:00",
  "updated_calendar_id": "cal_team_engineering",
  "updated_summary": "Quarterly Planning",
  "updated_description": "Discuss Q4 roadmap and key milestones.",
  "updated_location": "Conference Room B",
  "updated_visibility": "private",
  "attendee_emails_to_add": [
    "alice@example.com",
    "bob@example.com"
  ],
  "attendee_emails_to_remove": [
    "charlie@example.com"
  ],
  "send_notifications_to_attendees": "all",
  "updated_google_meet": "add"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
