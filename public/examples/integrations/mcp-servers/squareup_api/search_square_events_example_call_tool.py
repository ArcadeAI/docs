import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.SearchSquareEvents"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'end_time_range': '2023-10-31T23:59:59Z',
    'filter_by_location_ids': ['loc_123', 'loc_456'],
    'filter_event_types': ['payment', 'refund'],
    'maximum_events_per_page': 50,
    'merchant_ids_filter': ['merch_789'],
    'pagination_cursor': 'cursor_abc',
    'sort_key_for_event_search': 'DEFAULT',
    'sort_order': 'ASC',
    'time_range_start': '2023-10-01T00:00:00Z'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
