import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "MailchimpMarketingApi.AddLineItemToCart"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'cart_identifier': 'cart123',
    'cart_line_item_identifier': 'lineitem456',
    'line_item_price': 19.99,
    'line_item_quantity': 2,
    'product_id': 'prod789',
    'product_variant_id': 'variant001',
    'store_identifier': 'storeABC'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
