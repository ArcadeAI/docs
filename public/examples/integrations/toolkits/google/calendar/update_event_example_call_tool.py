from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GoogleCalendar.UpdateEvent"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "event_id": "your_event_id_here",
    "updated_summary": "Updated 1:1 with John Doe",
    "updated_start_datetime": "2024-12-31T11:00:00",
    "updated_end_datetime": "2024-12-31T11:30:00",
    "attendee_emails_to_add": ["jane.doe@example.com"],
    "updated_calendar_id": "primary",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
