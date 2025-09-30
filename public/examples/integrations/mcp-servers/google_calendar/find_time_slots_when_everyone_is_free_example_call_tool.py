import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GoogleCalendar.FindTimeSlotsWhenEveryoneIsFree"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'email_addresses': ['alice@example.com', 'bob@example.com', 'carol@example.com'],
    'start_date': '2025-09-15',
    'end_date': '2025-09-19',
    'start_time_boundary': '09:00',
    'end_time_boundary': '17:00'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
