import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Asana.SearchTasks"

auth_response = client.tools.authorize(tool_name=TOOL_NAME)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "keywords": "My Task",
    "workspace_id": "1234567890",
    "assignee_id": "1234567890",
    "project": "1234567890",
    "team_id": "1234567890",
    "tags": ["My Tag", "Another Tag", "1234567890"],
    "due_on_or_before": "2025-01-30",
    "start_on_or_after": "2025-01-01",
    "completed": False,
    "limit": 100,
    "sort_by": "modified_at",
    "sort_order": "descending",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(json.dumps(response.output.value, indent=2))
