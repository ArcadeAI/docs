import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.UpdateErrorTrackingReleases"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'created_at_timestamp': '2023-09-23T18:25:43.511Z',
    'project_identifier': '12345',
    'project_key': 'my_project',
    'release_hash_id': 'abc123',
    'release_id': '550e8400-e29b-41d4-a716-446655440000',
    'release_version': '1.0.0',
    'team_identifier': 42,
    'update_id': 'update_001',
    'metadata_description': 'Initial release for the project.'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
