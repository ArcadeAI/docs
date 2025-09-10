import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.CreateSlackUserGroup"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'user_group_name': 'dev-frontend',
    'default_channel_ids': ['C01234567', 'C08976543'],
    'custom_additional_channels': ['C01234567'],
    'user_group_description': 'Frontend developers working on web UI',
    'unique_mention_handle': 'dev_frontend',
    'team_id_for_user_group_creation': 'T12345678',
    'include_user_count': True,
    'enable_display_as_sidebar_section': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
