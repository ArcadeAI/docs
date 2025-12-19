import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "AshbyApi.UpdateJobOpening"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'department_team_id': '12345',
    'employment_type': 'FullTime',
    'fields_to_update': 'jobIds,targetHireDate',
    'is_backfill': True,
    'job_description_update': 'We are looking for a skilled software engineer to join our team.',
    'opening_identifier': 'job-67890',
    'target_hire_date': '2023-12-01',
    'target_start_date': '2024-01-15'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
