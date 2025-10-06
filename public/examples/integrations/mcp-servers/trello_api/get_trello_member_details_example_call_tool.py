import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.GetTrelloMemberDetails"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'member_id_or_username': 'alice.smith',
    'include_actions_details': 'all',
    'include_boards_details': 'all',
    'board_background_options': 'custom',
    'boards_invited_filter': 'open,public',
    'boards_invited_fields': 'id,name,desc',
    'include_card_details': 'all',
    'include_custom_board_backgrounds': 'all',
    'include_custom_emoji': 'none',
    'include_custom_stickers': 'none',
    'member_detail_fields': 'all',
    'include_notifications': 'none',
    'organizations_inclusion': 'members',
    'organization_fields': 'id,name',
    'invited_organizations_scope': 'public',
    'organization_fields_invited': 'id,name',
    'include_tokens': 'none',
    'include_board_stars': True,
    'include_paid_account_info_in_workspace': False,
    'include_paid_account_info': False,
    'include_saved_searches': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
