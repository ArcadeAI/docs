import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.GetTrelloNotification"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'notification_id': '5f7c8b2e9a1d3b4f2c6e7a90',
    'board_fields_to_include': 'id,name,desc',
    'card_fields_to_include': 'id,name,due,labels,shortUrl',
    'notification_fields': 'id,type,unread,date',
    'member_fields_inclusion': 'id,username,fullName',
    'include_member_creator_fields': 'all',
    'organization_field_selection': 'id,name',
    'include_board_object': True,
    'include_card': True,
    'include_display': True,
    'include_entities': False,
    'include_list_object': True,
    'include_member': True,
    'include_member_creator_object': True,
    'include_organization': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
