import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PagerdutyApi.ListEscalationPolicies"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'additional_models_to_include': 'services',
    'filter_by_user_ids': ['user123', 'user456'],
    'include_total_in_pagination': True,
    'name_filter_query': 'Critical Alerts',
    'pagination_offset': 0,
    'results_per_page': 10,
    'sort_by_field': 'name:asc',
    'team_ids': ['team1', 'team2']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
