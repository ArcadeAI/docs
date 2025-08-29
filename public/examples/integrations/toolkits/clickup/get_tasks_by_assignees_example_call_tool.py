import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Clickup.GetTasksByAssignees"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'workspace_id': '123456',
    'assignees_ids': ['789', '456'],
    'offset': 0,
    'limit': 25,
    'order_by': 'due_date',
    'should_sort_by_reverse': True,
    'statuses': ['in progress', 'review'],
    'include_closed': False,
    'due_date_gt': '2025-09-01',
    'due_date_lt': '2025-09-30',
    'date_created_gt': '2025-01-01',
    'date_created_lt': '2025-08-01'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
