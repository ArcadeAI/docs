import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ClickupApi.GetListTasks"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'list_identifier': 12345,
    'custom_task_type_filters': [0, 1],
    'display_tasks_in_reverse_order': True,
    'filter_by_assignees': [101, 102],
    'include_archived_tasks': False,
    'order_by_field': 'due_date',
    'page_number_to_fetch': 0
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
