import json
from arcade.client import Arcade

client = Arcade()

USER_ID = "you@example.com"
TOOL_NAME = "Google.UpdateEvent"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.auth_url}")
    input("After you have authorized, press Enter to continue...")

inputs = {
    'event_id': 'your_event_id_here',
    'updated_summary': 'Updated 1:1 with John Doe',
    'updated_start_day': 'today',
    'updated_start_time': '11:00',
    'updated_end_day': 'today',
    'updated_end_time': '11:30',
    'attendee_emails_to_add': ['jane.doe@example.com']
}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=json.dumps(inputs),
    user_id=USER_ID,
)
print(response)
