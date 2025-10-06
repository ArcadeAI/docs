import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.RetrieveLinkedTransactions"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'tenant_identifier': 'a1b2c3d4-tenant',
    'page_number': 1,
    'linked_transaction_id': 'ltx-987654',
    'source_transaction_id': 'src-inv-12345',
    'filter_by_contact_id': 'ct-555aaa',
    'filter_by_status': 'AUTHORISED',
    'filter_by_target_transaction_id': 'tgt-inv-67890'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
