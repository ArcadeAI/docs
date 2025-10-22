import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "VercelApi.ListUserEvents"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'deprecated_user_id': 'user123',
    'end_time_filter': '2023-10-01T12:00:00Z',
    'event_types_filter': 'login,deploy',
    'filter_by_principal_id': 'principal456',
    'include_event_payload': 'true',
    'maximum_items_to_return': 50,
    'team_identifier': 'team789'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
