import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.ListCustomerPaymentSources"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'customer_id': 'cus_ABC123xyz',
    'max_payment_sources_to_return': 25,
    'filter_by_object_type': 'card',
    'expand_response_fields': ['data.card', 'data.billing_details'],
    'pagination_start_cursor': 'card_1JH2xyZ4aBcD',
    'pagination_ending_before': 'card_1JH2wxY9zEfG'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
