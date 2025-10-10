import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.FetchAllXeroContacts"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'tenant_identifier': 'org_abc123',
    'filter_by_element': "EmailAddress.EndsWith('@example.com')",
    'sort_order': 'Name ASC',
    'contact_ids': ['c1f8a9b2-3d4e-11ec-9bbc-0242ac130002', 'd2f9b0c3-4e5f-11ec-9bbc-0242ac130003'],
    'pagination_page_number': 1,
    'search_term': 'Acme',
    'records_per_page': 50,
    'modified_since_timestamp': '2025-01-01T00:00:00Z',
    'include_archived_contacts': False,
    'retrieve_summary_only_contacts': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
