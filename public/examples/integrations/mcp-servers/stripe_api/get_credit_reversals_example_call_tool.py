import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetCreditReversals"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'financial_account_id': 'fa_12345ABCDE',
    'pagination_ending_before': 'cr_98765XYZ',
    'fields_to_expand': ['received_credit', 'financial_account'],
    'max_objects_returned': 25,
    'filter_by_received_credit_id': 'rc_54321LMN',
    'pagination_starting_after_cursor': 'cr_12345NEXT',
    'credit_reversal_status': 'processing'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
