import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "BoxApi.GetFolderDetails"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'folder_unique_identifier': '456',
    'requested_fields': ['id', 'name', 'size', 'created_at', 'shared_link'],
    'secondary_sort_attribute': 'name',
    'sort_direction': 'ASC',
    'response_offset': 0,
    'max_items_per_page': 50,
    'ensure_item_has_changed': '0a1b2c3d4e',
    'shared_link_credentials': 'shared_link=https://app.box.com/s/abcdef&shared_link_password=Tr0ub4dor'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
