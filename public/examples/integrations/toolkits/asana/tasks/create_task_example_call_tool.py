import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Asana.CreateTask"

auth_response = client.tools.authorize(tool_name=TOOL_NAME)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "name": "My Task",
    "description": "This is a task",
    "start_date": "2025-01-01",
    "due_date": "2025-01-30",
    "workspace_id": "1234567890",
    "project": "My Project",
    "assignee_id": "1234567890",
    "tags": ["Quick Fox", "Lazy Dog"],
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(json.dumps(response.output.value, indent=2))
