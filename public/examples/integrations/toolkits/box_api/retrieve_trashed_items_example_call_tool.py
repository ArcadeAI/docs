import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "BoxApi.RetrieveTrashedItems"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'include_attributes': ['owner', 'created_at', 'custom:project_id'],
    'maximum_items_per_page': 50,
    'pagination_offset': 0,
    'pagination_marker': 'mkr_9f8a7b',
    'sort_direction': 'DESC',
    'secondary_sort_attribute': 'date',
    'use_marker_based_pagination': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
