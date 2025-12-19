import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GithubApi.ListCheckSuitesForRef"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'commit_reference': 'abc123def456',
    'repository_name': 'sample-repo',
    'repository_owner': 'sample-owner',
    'github_app_id_filter': 12345,
    'results_page_number': 1,
    'results_per_page': 10,
    'specific_check_name': 'CI Check'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
