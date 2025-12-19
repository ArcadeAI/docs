import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "HubspotCmsApi.UpdateLandingPageFolder"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'content_folder_unique_id': '12345',
    'creation_timestamp': '2023-01-01T12:00:00Z',
    'deletion_timestamp_iso8601': '2023-12-31T12:00:00Z',
    'folder_category': 1,
    'folder_id': '67890',
    'folder_name': 'New Landing Page Folder',
    'parent_folder_id': 2,
    'update_timestamp': '2023-10-01T12:00:00Z',
    'update_deleted_folders': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
