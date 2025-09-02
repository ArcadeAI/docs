import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GoogleCalendar.CreateEvent"

auth_response = client.tools.authorize(tool_name=TOOL_NAME)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'summary': 'Team Meeting',
    'start_datetime': '2024-12-01T10:00:00',
    'end_datetime': '2024-12-01T11:00:00',
    'calendar_id': 'primary',
    'description': 'Monthly team sync to discuss project updates',
    'location': 'Conference Room A',
    'visibility': 'public',
    'attendee_emails': ['alice@example.com', 'bob@example.com']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
