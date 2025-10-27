import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PosthogApi.UpdateWebExperimentStatus"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'project_id_for_access': 'proj_12345',
    'creation_timestamp': '2023-10-05T14:48:00.000Z',
    'experiment_identifier': 1,
    'experiment_name': 'Homepage Redesign',
    'feature_flag_key': 'homepage_redesign',
    'web_experiment_id': 101,
    'web_experiment_variants': '{"control": {"transforms": [{"text": "Welcome to our new '
                               'homepage!","html": "","selector": "#main-header"}],"conditions": '
                               '"None","rollout_percentage": 50}}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
