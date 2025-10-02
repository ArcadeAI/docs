import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZoomMeetingsApi.GetZoomHostReport"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'start_date': '2025-09-01',
    'end_date': '2025-09-30',
    'host_activity_type': 'active',
    'record_count_per_api_call': 100,
    'current_page_number': 1,
    'next_page_pagination_token': 'eyJ0b2tlbiI6IjEyMzQ1NiIsImV4cCI6MTY5ODAwMDAwMCJ9',
    'zoom_group_id': 'grp_9a8b7c6d'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
