import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.ListSpans"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'end_time_filter': '2023-10-01T12:00:00Z',
    'max_number_of_spans': 100,
    'minimum_time_filter': '2023-10-01T00:00:00Z',
    'pagination_cursor': 'cursor123',
    'resource_type': 'search_request',
    'sort_order_for_spans': '-timestamp',
    'span_search_query': 'service:my-service',
    'time_offset_seconds': 3600,
    'timezone_option': 'UTC'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
