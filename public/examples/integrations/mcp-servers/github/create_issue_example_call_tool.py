from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Github.CreateIssue"

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
    "title": "Bug: Login button not working",
    "body": "## Description\nThe login button on the main page doesn't respond to clicks.\n\n## Steps to Reproduce\n1. Go to homepage\n2. Click login button\n3. Nothing happens\n\n## Expected Behavior\nShould redirect to login page",
    "labels": ["bug", "high-priority"],
    "assignees": ["developer1"],
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
