import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GithubApi.ListUserRepositories"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_repositories_before_timestamp': '2023-01-01T00:00:00Z',
    'repository_affiliation_filter': 'owner,collaborator',
    'repository_type': 'public',
    'results_page_number': 1,
    'results_per_page': 10,
    'sort_order': 'desc',
    'sort_property': 'updated'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
