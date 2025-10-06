import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.SetFinancialSetup"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'xero_tenant_identifier': 'abcd1234-tenant',
    'financial_setup_details': {   'conversion_date': '2025-01-01',
                                   'accounts': [   {   'code': '1000',
                                                       'name': 'Cash at Bank',
                                                       'type': 'ASSET',
                                                       'tax_type': 'NONE'},
                                                   {   'code': '2000',
                                                       'name': 'Accounts Payable',
                                                       'type': 'LIABILITY',
                                                       'tax_type': 'NONE'},
                                                   {   'code': '3000',
                                                       'name': 'Revenue',
                                                       'type': 'REVENUE',
                                                       'tax_type': 'OUTPUT'},
                                                   {   'code': '4000',
                                                       'name': 'Expenses',
                                                       'type': 'EXPENSE',
                                                       'tax_type': 'NONE'}],
                                   'conversion_balances': [   {   'account_code': '1000',
                                                                  'balance': 15000.0,
                                                                  'currency': 'USD'},
                                                              {   'account_code': '2000',
                                                                  'balance': -4500.0,
                                                                  'currency': 'USD'},
                                                              {   'account_code': '3000',
                                                                  'balance': 0.0,
                                                                  'currency': 'USD'},
                                                              {   'account_code': '4000',
                                                                  'balance': 0.0,
                                                                  'currency': 'USD'}]},
    'idempotency_key': 'setup-2025-01-01-unique'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
