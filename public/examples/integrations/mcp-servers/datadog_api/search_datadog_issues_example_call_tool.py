import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.SearchDatadogIssues"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'end_date': 1699996800000,
    'object_type': 'search_request',
    'search_event_query': 'status:error',
    'start_date_millis': 1699900400000,
    'event_track_to_query': 'logs',
    'include_relationship_objects': ['user', 'service'],
    'search_persona': 'ALL',
    'sort_results_by': 'PRIORITY'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
