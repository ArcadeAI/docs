import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"  # Unique identifier for your user (email, UUID, etc.)
TOOL_NAME = "Linear.UpdateIssue"

auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=USER_ID)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "issue_id": "PROJ-123",
    "title": "Updated title",
    "priority": "urgent",
    "labels_to_add": ["critical"],
    "assignee": "john@example.com"
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))

