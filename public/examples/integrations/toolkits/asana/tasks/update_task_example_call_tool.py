import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Asana.UpdateTask"

auth_response = client.tools.authorize(tool_name=TOOL_NAME)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "task_id": "1234567890",
    "name": "My Task",
    "description": "This is a task",
    "completed": True,
    "start_date": "2025-01-01",
    "due_date": "2025-01-30",
    "assignee_id": "1234567890",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(json.dumps(response.output.value, indent=2))
