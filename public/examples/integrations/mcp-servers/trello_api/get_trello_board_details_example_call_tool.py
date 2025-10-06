import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.GetTrelloBoardDetails"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'board_id': '5f8d0d3a9c1b2a00123abcd4',
    'include_actions': 'true',
    'board_stars_filter': 'none',
    'include_card_details': 'true',
    'include_checklists': 'true',
    'board_fields_to_include': 'name,url,desc',
    'include_labels_resource': 'true',
    'include_lists': 'all',
    'include_members': 'true',
    'include_memberships': 'true',
    'include_card_plugin_data': False,
    'include_custom_fields': True,
    'include_plugin_data': False,
    'include_organization': True,
    'include_organization_plugin_data': False,
    'include_my_preferences': True,
    'include_tags': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
