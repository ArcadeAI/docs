import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GithubApi.CreateGithubPagesDeployment"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'artifact_url': 'https://github.com/user/repo/releases/download/v1.0.0/assets.zip',
    'oidc_token_for_deployment': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    'repository_name': 'my-repo',
    'repository_owner': 'user',
    'build_version_identifier': 'v1.0.0',
    'target_environment_for_deployment': 'production'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
