import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Clickup.FuzzySearchTasksByName"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'name_to_search': 'quarterly roadmap update',
    'workspace_id': '123456',
    'scan_size': 250,
    'include_closed': False,
    'statuses': ['In Progress', 'Backlog'],
    'assignee_ids': ['78910', '78911'],
    'space_ids': ['111', '112'],
    'folder_ids': ['222'],
    'list_ids': ['333', '334'],
    'limit': 10
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
