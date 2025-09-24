import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.UpdateSlackUsergroupUsers"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'user_group_id': 'S0614K5ZC',
    'user_ids_list': ['U12345678', 'U23456789', 'U34567890'],
    'team_id_for_org_token': 'T012AB3C4',
    'update_additional_channels': ['C01AB2C3D', 'C02EF3G4H'],
    'include_user_count': True,
    'is_shared_section': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
