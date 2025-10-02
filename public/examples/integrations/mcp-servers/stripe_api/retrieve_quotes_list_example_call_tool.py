import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.RetrieveQuotesList"

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
    'result_limit': 25,
    'quote_status': 'open',
    'fields_to_expand': ['data.customer', 'data.line_items'],
    'pagination_starting_after': 'qt_00000000000001',
    'pagination_ending_before_cursor': None,
    'test_clock_id': None
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
