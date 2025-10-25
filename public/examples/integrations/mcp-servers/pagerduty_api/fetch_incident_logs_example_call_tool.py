import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PagerdutyApi.FetchIncidentLogs"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'additional_models_to_include': 'incidents, services',
    'include_total_in_pagination': True,
    'pagination_offset': 10,
    'render_results_in_time_zone': 'UTC',
    'results_per_page': 25,
    'return_important_changes_only': False,
    'search_end_date': '2023-10-31',
    'start_date_range': '2023-10-01',
    'team_ids': ['team1', 'team2']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
