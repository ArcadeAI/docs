from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Github.UpdateFileLines"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "owner": "your-org",
    "repo": "your-repo",
    "path": "config.json",
    "branch": "main",
    "start_line": 10,
    "end_line": 12,
    "new_content": '    "timeout": 5000,\n    "retry": 3',
    "message": "chore: Update timeout configuration",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)

