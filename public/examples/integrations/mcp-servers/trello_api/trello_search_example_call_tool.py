import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.TrelloSearch"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'search_query': 'release notes board',
    'board_filter': 'mine',
    'search_object_types': 'boards,cards',
    'board_fields_to_include': 'name,url',
    'maximum_boards_to_return': 10,
    'card_fields_selection': 'name,due,labels',
    'maximum_cards_to_return': 50,
    'cards_page_number': 1,
    'include_card_attachments': 'cover',
    'organization_fields': 'name,url',
    'maximum_workspaces_to_return': 5,
    'member_fields': 'fullName,username,avatarHash',
    'maximum_members_to_return': 20,
    'include_board_organization': True,
    'include_parent_board_with_card_results': True,
    'include_parent_list_with_card_results': True,
    'include_card_members': True,
    'include_card_stickers': False,
    'partial_match_search': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
