import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetStripePaymentLinks"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'pagination_ending_before': 'plink_1A2b3C4d5E',
    'fields_to_expand': ['data.line_items', 'data.url'],
    'object_return_limit': 25,
    'pagination_starting_after_cursor': 'plink_9Z8y7X6w5V',
    'include_active_payment_links': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
