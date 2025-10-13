import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.ListPaymentRefunds"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'start_time_for_refund_retrieval': '2024-10-01T00:00:00Z',
    'refund_end_time': '2024-10-13T00:00:00Z',
    'results_sort_order': 'DESC',
    'pagination_cursor': 'cursor_ABC123',
    'limit_results_to_location': 'LOCATION_987',
    'refund_status_filter': 'COMPLETED',
    'payment_source_type': 'CARD',
    'max_results_per_page': 50,
    'updated_at_start_time': '2024-10-01T00:00:00Z',
    'updated_at_end_time': '2024-10-13T00:00:00Z',
    'sort_results_by_field': 'CREATED_AT'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
