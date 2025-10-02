import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetUpfrontQuoteLineItems"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'quote_id': 'qt_1A2b3C4d5E',
    'pagination_ending_before_id': 'li_9Z8y7X6w5V',
    'fields_to_expand': ['invoice', 'price.product'],
    'max_line_items_to_return': 20,
    'pagination_starting_object_id': 'obj_abc123'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
