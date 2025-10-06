import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.UpdateTrelloBoard"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'board_id': '5f8d0a12b3c4e56789ab0123',
    'board_new_name': 'Sprint Planning Board',
    'new_board_description': 'Board for tracking sprint tasks and planning.',
    'user_subscribed_status': 'true',
    'workspace_id_for_board': '60d21b4667d0d8992e610c85',
    'board_permission_level': 'private',
    'board_invitation_permission': 'admins',
    'voting_permission': 'members',
    'comment_permission': 'members',
    'board_background_id': 'blue',
    'card_aging_preference': 'regular',
    'green_label_name': 'Low Priority',
    'yellow_label_name': 'Medium Priority',
    'orange_label_name': 'High Priority',
    'red_label_name': 'Critical',
    'purple_label_name': 'Blocked',
    'blue_label_name': 'Research',
    'is_board_closed': False,
    'allow_workspace_self_join': True,
    'display_card_covers': True,
    'hide_votes': False,
    'enable_calendar_feed': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
