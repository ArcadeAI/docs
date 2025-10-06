import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.RetrieveAccountAttachmentByFilename"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'account_id': 'f8b2c9e4-3a1d-4b2f-9c7a-1e2d3f4a5b6c',
    'attachment_file_name': 'invoice-12345.pdf',
    'tenant_identifier': 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'mime_type_of_attachment': 'application/pdf'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
