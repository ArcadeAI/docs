import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.RetrievePaymentsList"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'card_last_four_digits': '1234',
    'end_time': '2023-10-01T12:00:00Z',
    'is_offline_payment': True,
    'max_results_per_page': 50,
    'payment_card_brand': 'VISA',
    'results_sort_order': 'DESC',
    'start_time_range': '2023-01-01T00:00:00Z'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
