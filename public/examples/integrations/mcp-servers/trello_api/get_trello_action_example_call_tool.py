import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.GetTrelloAction"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'action_id': '64b8f2a3e1c4b12d9f0a7b21',
    'action_fields': 'type,date,data,memberCreator',
    'member_fields_list': 'id,username,fullName',
    'member_creator_fields': 'all',
    'include_display': True,
    'include_entities': True,
    'include_member': False,
    'include_action_creator': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
