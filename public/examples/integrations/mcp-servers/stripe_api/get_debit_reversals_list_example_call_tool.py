import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetDebitReversalsList"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'financial_account_id': 'fa_12345',
    'pagination_ending_before_cursor': 'dr_abcde_prev',
    'fields_to_expand': ['received_debit', 'transaction'],
    'max_number_of_debit_reversals': 25,
    'filter_by_received_debit_id': 'rd_67890',
    'resolution_status': 'lost',
    'pagination_starting_after_cursor': 'dr_fghij_next',
    'filter_by_status': 'completed'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
