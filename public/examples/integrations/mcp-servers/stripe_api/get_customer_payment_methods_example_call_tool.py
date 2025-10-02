import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetCustomerPaymentMethods"

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
    'enable_redisplay_setting': 'limited',
    'pagination_ending_before_id': 'pm_000987',
    'response_fields_to_expand': ['data.card', 'data.billing_details'],
    'max_payment_methods_returned': 20,
    'pagination_starting_after_cursor': 'pm_000450',
    'payment_method_type_filter': 'card'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
