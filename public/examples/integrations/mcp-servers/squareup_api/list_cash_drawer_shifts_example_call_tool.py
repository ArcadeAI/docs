import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.ListCashDrawerShifts"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'location_identifier': 'loc_98765',
    'sort_order_for_listing': 'DESC',
    'query_start_time': '2025-10-01T00:00:00Z',
    'exclusive_end_date': '2025-10-07T00:00:00Z',
    'result_limit': 100,
    'next_page_cursor': 'eyJwYWdlIjoxfQ=='
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
