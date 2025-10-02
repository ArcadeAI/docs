import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetPaymentLinkLineItems"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'payment_link_id': 'plink_1ExampleA2b3C4d5',
    'item_limit': 5,
    'fields_to_expand': ['data.price.product', 'data.price.tier'],
    'pagination_starting_after': 'li_1ExampleLastItem',
    'pagination_ending_before': 'li_1ExamplePrevItem'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
