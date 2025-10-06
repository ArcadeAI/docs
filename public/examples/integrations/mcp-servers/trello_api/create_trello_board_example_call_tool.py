import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.CreateTrelloBoard"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'board_name': 'Website Redesign',
    'board_description': 'Board to track website redesign tasks and milestones',
    'workspace_id_or_name': 'Marketing Team',
    'enable_power_ups': 'calendar',
    'board_permission_level': 'org',
    'set_voting_permissions': 'members',
    'comment_permissions': 'members',
    'invitation_permission_level': 'members',
    'board_background_color': 'sky',
    'card_aging_type': 'regular',
    'use_default_labels': True,
    'add_default_lists': True,
    'allow_self_join': False,
    'enable_card_covers': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
