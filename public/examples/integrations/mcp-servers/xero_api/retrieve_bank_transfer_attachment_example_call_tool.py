import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.RetrieveBankTransferAttachment"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'bank_transfer_id': 'b3f9c2d4-8a1e-4f2b-9c7a-2d5e6f7a8b90',
    'attachment_file_name': 'receipt-2025-09-30.pdf',
    'xero_tenant_identifier': 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
    'attachment_mime_type': 'application/pdf'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
