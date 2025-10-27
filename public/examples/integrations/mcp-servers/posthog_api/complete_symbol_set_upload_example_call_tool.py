import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.CompleteSymbolSetUpload"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'project_id_for_symbol_set': '12345',
    'reference_id': 'ref-67890',
    'symbol_set_id': 'uuid-abcde-12345',
    'team_identifier': 42,
    'upload_created_at_timestamp': '2023-10-01T12:00:00Z',
    'upload_session_id': 'session-xyz-98765'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
