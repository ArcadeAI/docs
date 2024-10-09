import json
from arcade.client import Arcade

client = Arcade()

USER_ID = "you@example.com"
TOOL_NAME = "Google.CreateEvent"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.auth_url}")
    input("After you have authorized, press Enter to continue...")

inputs = {
    'summary': '1:1 with John Doe',
    'description': 'Discuss project updates and next steps',
    'start_date': 'today',
    'start_time': '10:00',
    'end_date': 'today',
    'end_time': '10:30',
    'attendee_emails': ['john.doe@example.com']
}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=json.dumps(inputs),
    user_id=USER_ID,
)
print(response)
