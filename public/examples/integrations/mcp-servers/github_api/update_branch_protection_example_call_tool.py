import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GithubApi.UpdateBranchProtection"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'mode': 'execute',
    'repository_owner': 'exampleUser',
    'repository_name': 'exampleRepo',
    'branch_name': 'main',
    'request_body': '{"required_status_checks": {"strict": true, "contexts": ["ci/test"]}, '
                    '"enforce_admins": true, "required_pull_request_reviews": '
                    '{"dismiss_stale_reviews": true, "require_code_owner_reviews": true}, '
                    '"restrictions": {"users": ["user1"], "teams": ["team1"]}}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
