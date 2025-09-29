import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "BoxApi.RetrieveFileDetails"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'file_identifier': '12345',
    'included_file_attributes': ['name', 'size', 'metadata.enterpriseProperties'],
    'etag_conditional_retrieval': '"0a1b2c3d4e5f"',
    'shared_link_with_optional_password': 'shared_link=https://example.app.box.com/s/abcd1234&shared_link_password=pa$$w0rd',
    'file_representations_request': '[jpg?dimensions=128x128][pdf?locale=en_US]'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
