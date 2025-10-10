import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.FetchInvoicePayments"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'xero_tenant_identifier': 'a1b2c3d4-5678-90ab-cdef-EXAMPLETENANT',
    'filter_condition': 'Status=="AUTHORISED" AND Amount>100',
    'order_by': 'Date DESC',
    'page_number': 1,
    'records_per_page': 50,
    'modified_since_timestamp': '2025-01-01T00:00:00Z'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
