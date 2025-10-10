import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.DeleteCreditNoteAllocation"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'credit_note_unique_id': 'c9f1e8b2-4a6d-4f3b-9a2e-1b2c3d4e5f60',
    'allocation_id': 'a7d3f9b1-2c4e-4a8b-9f0d-6e7b8c9d0e1f',
    'xero_tenant_id': 'b2d3c4e5-6789-0123-4567-89abcdef0123'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
