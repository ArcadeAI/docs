import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.CreateFileSystemShortcut"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'creation_timestamp': '2023-10-01T12:00:00Z',
    'file_system_path': '/projects/my_project/env',
    'project_identifier': 'proj-12345',
    'shortcut_identifier': 'shortcut-001',
    'reference_name': 'My Project Shortcut',
    'shortcut_type': 'folder'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
