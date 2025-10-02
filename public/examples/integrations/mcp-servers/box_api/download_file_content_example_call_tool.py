import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "BoxApi.DownloadFileContent"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'file_identifier': 'f_9a8b7c6d',
    'file_version_to_download': 'v2',
    'optional_access_token': 'rk-read-12345',
    'download_byte_range': 'bytes=0-1048575',
    'shared_link_with_optional_password': 'shared_link=https://files.example.com/s/abc123&shared_link_password=secret'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
