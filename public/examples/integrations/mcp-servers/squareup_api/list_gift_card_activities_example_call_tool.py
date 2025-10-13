import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.ListGiftCardActivities"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'gift_card_id': 'gc_12345',
    'activity_type': 'RELOAD',
    'location_id': 'loc_987',
    'reporting_start_time': '2024-10-01T00:00:00Z',
    'end_time': '2025-10-01T23:59:59Z',
    'result_limit': 50,
    'pagination_cursor': 'cursor_abc123',
    'activities_sort_order': 'DESC'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
