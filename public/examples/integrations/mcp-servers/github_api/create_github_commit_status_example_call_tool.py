import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GithubApi.CreateGithubCommitStatus"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'commit_sha': 'abc123def456',
    'repository_name': 'my-repo',
    'repository_owner': 'myusername',
    'status_state': 'success',
    'commit_status_target_url': 'https://ci.example.com/build/123',
    'status_description': 'Build completed successfully.',
    'status_label': 'CI'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
