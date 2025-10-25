import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PagerdutyApi.ListExistingIncidents"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'additional_details_to_include': 'acknowledgers',
    'assigned_user_ids': ['user123', 'user456'],
    'end_date_range': '2023-10-31',
    'filter_by_team_ids': ['team1', 'team2'],
    'incident_statuses': 'triggered,acknowledged',
    'include_total_in_response': True,
    'pagination_offset': 0,
    'results_per_page': 50,
    'service_ids': ['service1', 'service2'],
    'sort_incidents_by': ['created_at:desc'],
    'start_date_range': '2023-09-01'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
