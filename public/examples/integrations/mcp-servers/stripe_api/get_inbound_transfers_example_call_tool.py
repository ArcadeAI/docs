import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetInboundTransfers"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'financial_account_id': 'fa_123456789',
    'pagination_ending_before_id': 'it_987654321',
    'expand_response_fields': ['data.source_transaction', 'data.destination_payment_method'],
    'transfer_limit': 25,
    'pagination_starting_after_object_id': 'it_123450987',
    'filter_by_transfer_status': 'succeeded'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
