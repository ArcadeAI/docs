import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "HubspotEventsApi.RetrieveEventCompletions"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'crm_object_id': 12345,
    'crm_object_type': 'contact',
    'event_instance_ids': [1, 2, 3],
    'event_property_filter': {'hs_city': 'portland'},
    'event_type_name': 'webinar',
    'filter_events_occurred_before': '2023-12-31T23:59:59Z',
    'max_results_per_page': 10,
    'sort_direction': ['DESCENDING'],
    'unique_identifier_property': {'email': 'example@domain.com'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
