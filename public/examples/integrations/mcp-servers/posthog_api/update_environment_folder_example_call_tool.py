import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.UpdateEnvironmentFolder"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'folder_creation_date': '2023-10-12T14:23:30Z',
    'folder_id': 'folder-123',
    'folder_type': 'home',
    'folder_update_timestamp': '2023-10-15T10:00:00Z',
    'folder_uuid': '550e8400-e29b-41d4-a716-446655440000',
    'project_identifier': 'project-456',
    'folder_path': '/path/to/folder',
    'folder_protocol_type': 'http'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
