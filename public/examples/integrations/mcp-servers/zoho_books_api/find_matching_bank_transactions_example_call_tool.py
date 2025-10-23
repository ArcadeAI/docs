import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZohoBooksApi.FindMatchingBankTransactions"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'organization_id': 'org_12345',
    'transaction_id': 'txn_67890',
    'bank_transaction_id': 'bank_txn_54321',
    'transaction_type': 'deposit',
    'filter_date_after': '2023-01-01',
    'minimum_transaction_amount': 100.0,
    'page_number_to_fetch': 1,
    'records_per_page': 50
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
