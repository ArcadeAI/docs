import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.UpdateWebExperiment"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'experiment_id': 123,
    'experiment_name': 'New Experiment',
    'feature_flag_key': 'feature_abc',
    'project_id': 'proj_456',
    'web_experiment_id': 789,
    'web_experiment_variants': '{"control": {}, "transforms": [], "conditions": [], '
                               '"rollout_percentage": 50}',
    'creation_timestamp': '2023-10-01T12:00:00Z'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
