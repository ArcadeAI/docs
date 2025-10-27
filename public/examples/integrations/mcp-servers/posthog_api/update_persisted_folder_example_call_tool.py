import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.UpdatePersistedFolder"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'folder_creation_date': '2023-01-15T10:00:00Z',
    'folder_id': 'folder-123',
    'folder_type': 'home',
    'persisted_folder_id': 'uuid-456',
    'project_id': 'project-789',
    'update_timestamp': '2023-10-01T12:34:56Z'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
