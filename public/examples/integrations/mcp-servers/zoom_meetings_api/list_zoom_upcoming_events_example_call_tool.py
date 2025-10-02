import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZoomMeetingsApi.ListZoomUpcomingEvents"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'start_date': '2025-10-01',
    'end_date': '2025-10-31',
    'records_per_page': 50,
    'event_type_to_query': 'all',
    'pagination_token': 'eyJwb2siOiJwYWdlMSIsImV4cCI6IjE2ODc5In0',
    'group_identifier': 'grp_8a7f3c'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
