import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ClickupApi.UpdateGoalDetails"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'goal_color': '#FF5733',
    'goal_description': 'Increase team productivity by 20%',
    'goal_due_date': 1699996800,
    'goal_id': '123e4567-e89b-12d3-a456-426614174000',
    'goal_name': 'Productivity Boost',
    'new_owners_to_add': ['user_1', 'user_2'],
    'remove_owners_user_ids': ['user_3']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
