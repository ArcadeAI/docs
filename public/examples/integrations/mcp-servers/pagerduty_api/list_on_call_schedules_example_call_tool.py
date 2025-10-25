import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PagerdutyApi.ListOnCallSchedules"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'additional_details_to_include': 'schedule_layers',
    'end_date_range': '2023-11-15',
    'filter_by_name': 'John Doe',
    'include_total_in_pagination': True,
    'pagination_offset': 0,
    'render_results_in_time_zone': 'UTC',
    'results_per_page': 10,
    'start_date_for_schedule_entries': '2023-11-01',
    'user_id_for_next_oncall': 'user_12345'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
