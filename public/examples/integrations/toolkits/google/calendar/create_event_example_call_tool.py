from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GoogleCalendar.CreateEvent"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "summary": "1:1 with John Doe",
    "description": "Discuss project updates and next steps",
    "start_datetime": "2024-12-31T10:00:00",
    "end_datetime": "2024-12-31T10:30:00",
    "attendee_emails": ["john.doe@example.com"],
    "calendar_id": "primary",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
