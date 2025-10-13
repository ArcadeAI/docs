import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.RetrieveInvoices"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'xero_tenant_id': '123e4567-e89b-12d3-a456-426614174000',
    'filter_by_condition': 'Status=="AUTHORISED" AND Date>=DateTime(2025,01,01)',
    'order_by': 'Date DESC',
    'invoice_ids': ['inv-001', 'inv-002'],
    'filter_by_invoice_numbers': ['1001', '1002'],
    'filter_contact_ids': ['c-abc123', 'c-def456'],
    'filter_by_statuses': ['AUTHORISED', 'PAID'],
    'page_number': 1,
    'unit_decimal_places': 4,
    'records_per_page': 50,
    'search_term': 'consulting',
    'modified_since_timestamp': '2025-01-01T00:00:00',
    'include_archived_invoices': False,
    'filter_by_created_by_my_app': True,
    'retrieve_summary_only': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
