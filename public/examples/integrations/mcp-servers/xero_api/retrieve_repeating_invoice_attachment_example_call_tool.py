import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.RetrieveRepeatingInvoiceAttachment"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'repeating_invoice_id': 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
    'attachment_file_name': 'invoice-attachment.pdf',
    'xero_tenant_identifier': '12345678-90ab-cdef-1234-567890abcdef',
    'attachment_mime_type': 'application/pdf'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
