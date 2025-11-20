from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Github.CreateOrUpdateFile"

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
    "path": "docs/new_doc.md",
    "content": "# New Documentation\n\nThis is a new file created via API.",
    "message": "docs: Add new documentation file",
    "branch": "feature/docs-update",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)

