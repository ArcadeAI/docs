import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.SearchLoyaltyEvents"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'end_time': '2023-10-31T23:59:59Z',
    'location_ids_for_events_query': ['loc_123', 'loc_456'],
    'loyalty_account_id': 'acc_789',
    'loyalty_event_types': ['points_earned', 'points_redeemed'],
    'max_results_count': 10,
    'order_id_filter': 'order_001',
    'pagination_cursor': 'cursor_abc',
    'start_datetime': '2023-10-01T00:00:00Z'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
