import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.RetrieveSalesQuotes"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'xero_tenant_id': 'tenant_abc123',
    'filter_start_date': '2025-01-01',
    'filter_date_to': '2025-09-30',
    'expiry_date_after': '2025-10-01',
    'filter_expiry_date_before': '2025-12-31',
    'contact_id': 'contact_789',
    'quote_status': 'SENT',
    'page_number': 1,
    'order_by_element': 'Date',
    'quote_number_filter': 'QU-042',
    'modified_since_timestamp': '2025-08-15T00:00:00Z'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
