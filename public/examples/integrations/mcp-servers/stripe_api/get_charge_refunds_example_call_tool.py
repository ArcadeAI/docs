import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetChargeRefunds"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'charge_id': 'ch_1K2xYzAbCdEfGhIj',
    'pagination_ending_before': 're_1J2kLmNoPqRsTuVw',
    'fields_to_expand': ['data.balance_transaction', 'data.charge'],
    'object_return_limit': 25,
    'pagination_starting_after': 're_1K3lMnOpQrStUvWx'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
