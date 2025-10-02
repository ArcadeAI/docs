import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZoomMeetingsApi.GetArchivedZoomFiles"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'number_of_records_per_call': 50,
    'pagination_token': 'eyJzaWQiOiJwYWdlMSIsImVkIjoiMTY5NjAwMDAwMCJ9',
    'query_start_date': '2025-09-25T00:00:00Z',
    'query_end_date': '2025-09-30T23:59:59Z',
    'query_date_type': 'archive_complete_time',
    'filter_by_group_ids': 'grp_123,grp_456'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
