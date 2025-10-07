import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.GetTrelloCardById"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'card_id': '5f6d7a8b9c0d1e2f3a4b5c6d',
    'card_fields_to_retrieve': 'all',
    'include_action_details': 'all',
    'include_attachments': 'cover',
    'attachment_fields': 'all',
    'member_fields_selection': 'avatarHash,fullName,username',
    'member_voted_fields': 'fullName,username',
    'include_checklists': 'all',
    'checklist_fields': 'all',
    'board_fields_to_return': 'name,desc,idOrganization',
    'sticker_fields': 'all',
    'include_card_members': True,
    'include_members_who_voted': False,
    'include_check_item_states': True,
    'include_board_object': True,
    'include_lists_nested_resource': False,
    'include_plugin_data': False,
    'include_stickers': True,
    'include_custom_field_items': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
