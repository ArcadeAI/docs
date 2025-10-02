import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.RetrieveTaxCalculationLineItems"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'tax_calculation_id': 'txcl_1KxYz2AbCdEfGhIj',
    'pagination_cursor_ending_before': 'tli_00000000000001',
    'fields_to_expand': ['lines.data.tax_rate', 'customer'],
    'object_return_limit': 25,
    'pagination_starting_after_item_id': 'tli_00000000000025'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
