import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Clickup.UpdateTask"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'task_id': 'abc123',
    'task_title': 'Finalize onboarding docs',
    'description': 'Update docs for new hires: add checklist and links to resources.',
    'priority': 'HIGH',
    'status': 'In Progress',
    'due_date': '2025-09-05',
    'start_date': '2025-08-29 09:00',
    'sprint_points': 3
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
