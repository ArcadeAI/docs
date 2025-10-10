import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.GetCreditNotes"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'tenant_identifier': 'abc123-tenant',
    'filter_by_element': 'Status=="AUTHORISED"',
    'sort_credit_notes': 'Date DESC',
    'page_number': 1,
    'unit_decimal_places': 4,
    'number_of_records_per_page': 50,
    'modified_since_timestamp': '2025-01-01T00:00:00Z'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
