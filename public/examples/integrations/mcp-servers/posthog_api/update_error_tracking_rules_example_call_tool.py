import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.UpdateErrorTrackingRules"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'assignee_identifier': 'user123',
    'assignment_rule_id': '550e8400-e29b-41d4-a716-446655440000',
    'environment_id': 'env-prod',
    'filter_criteria': "error.type == 'critical'",
    'project_id': 'proj-456',
    'update_order_key': 1,
    'disable_error_data': 'false'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
