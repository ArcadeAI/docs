import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.CreateCheckitemOnChecklist"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'checkitem_name': 'Review API integration',
    'checklist_id': '5f8d7a2b9c1e4b3a',
    'checkitem_position': 'bottom',
    'checkitem_due_date': '2025-10-10',
    'due_reminder_minutes': 1440,
    'member_id': '603d2f1a7b4c9e2f',
    'is_checkitem_checked': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
