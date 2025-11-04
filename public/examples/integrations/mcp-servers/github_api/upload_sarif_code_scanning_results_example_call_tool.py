import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GithubApi.UploadSarifCodeScanningResults"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'base64_compressed_sarif_data': 'H4sIAAAAAAAAA6tWSs5M0UjOzy/1z8/8DgDgAIAAA=',
    'commit_sha': 'abc123def456ghi789jkl',
    'git_reference': 'refs/heads/main',
    'repository_name': 'sample-repo',
    'repository_owner': 'sample-owner',
    'analysis_start_time': '2023-10-01T12:00:00Z',
    'base_directory_for_analysis': '/src',
    'tool_name': 'CodeAnalyzer'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
