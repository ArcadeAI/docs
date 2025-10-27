import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.CreateErrorTrackingRelease"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'error_release_id': 'release-12345',
    'hash_identifier': 'hash-abcde',
    'project_id': 'project-67890',
    'project_name': 'Sample Project',
    'release_creation_timestamp': '2023-10-02T14:48:00Z',
    'release_version': '1.0.0',
    'team_identifier': 42,
    'release_metadata': 'Initial release for error tracking'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
