import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GithubApi.CreateGithubDeploymentStatus"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'deployment_id': 12345,
    'deployment_status_state': 'success',
    'repository_name': 'example-repo',
    'repository_owner': 'example-owner',
    'add_inactive_status_to_previous_deployments': True,
    'deployment_environment': 'production',
    'status_description': 'Deployment completed successfully.'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
