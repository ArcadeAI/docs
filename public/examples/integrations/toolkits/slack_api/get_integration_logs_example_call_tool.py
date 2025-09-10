import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.GetIntegrationLogs"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_by_app_id': 'A123BCD45',
    'filter_by_change_type': 'added',
    'result_count': '50',
    'result_page_number': '1',
    'filter_by_service_id': 'SVC789',
    'encoded_team_id': 'T-ENC-9f8e7d6c',
    'filter_by_user': 'U234XYZ'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
