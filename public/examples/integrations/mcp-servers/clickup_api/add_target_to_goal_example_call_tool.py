import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ClickupApi.AddTargetToGoal"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'goal_identifier': '123e4567-e89b-12d3-a456-426614174000',
    'initial_value_steps': 0,
    'linked_task_ids': ['task_1', 'task_2'],
    'list_ids': ['list_1', 'list_2'],
    'target_name': 'Increase User Engagement',
    'target_owners_ids': ['user_1', 'user_2'],
    'target_steps_end': 100,
    'target_type': 'percentage',
    'target_unit': '%'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
