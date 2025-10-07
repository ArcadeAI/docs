import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.UpdateTrelloMember"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'member_identifier': '5f8d0d55a0b1c23e7f1a2b3c',
    'new_member_full_name': 'Alex Rivera',
    'member_initials': 'AR',
    'new_username': 'alex_rivera',
    'member_bio': 'Product manager focused on UX and agile delivery.',
    'avatar_source_option': 'upload',
    'preferred_locale': 'en-US',
    'update_interval_minutes': 60,
    'enable_color_blind_mode': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
