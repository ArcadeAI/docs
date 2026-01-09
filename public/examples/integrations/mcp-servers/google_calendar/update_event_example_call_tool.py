import json
from arcadepy import Arcade
# Required Google OAuth scopes:
# - https://www.googleapis.com/auth/calendar.events

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GoogleCalendar.UpdateEvent"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'event_id': 'evt_12345',
    'updated_start_datetime': '2025-10-01T09:00:00',
    'updated_end_datetime': '2025-10-01T10:00:00',
    'updated_calendar_id': 'cal_team_engineering',
    'updated_summary': 'Quarterly Planning',
    'updated_description': 'Discuss Q4 roadmap and key milestones.',
    'updated_location': 'Conference Room B',
    'updated_visibility': 'private',
    'attendee_emails_to_add': ['alice@example.com', 'bob@example.com'],
    'attendee_emails_to_remove': ['charlie@example.com'],
    'send_notifications_to_attendees': 'all',
    'updated_google_meet': 'add'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
