import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.UpdateEnvironmentGroupProperty"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'creation_timestamp': '2023-10-05T14:48:00Z',
    'environment_group_key': 'env-group-123',
    'group_key': 'group-456',
    'group_type_identifier': 1,
    'group_type_index_identifier': 0,
    'project_id': 'project-789',
    'group_properties': '{"property1": "value1", "property2": "value2"}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
