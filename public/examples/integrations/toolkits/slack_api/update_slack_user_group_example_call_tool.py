import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.UpdateSlackUserGroup"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'user_group_id': 'S12345G',
    'default_channel_ids': ['C11111', 'C22222'],
    'additional_channel_ids': ['C33333'],
    'user_group_description': 'On-call engineers for backend services',
    'user_group_handle': 'oncall-backend',
    'user_group_name': 'Backend Oncall',
    'team_id_for_org_token': 'T98765',
    'include_user_count': True,
    'enable_sidebar_section': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
