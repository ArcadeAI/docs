import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "CalendlyApi.ListScheduledEvents"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'user_uri': 'https://api.calendly.com/users/ABC123',
    'organization_uri': 'https://api.calendly.com/organizations/ORG789',
    'invitee_email': 'invitee@example.com',
    'event_status': 'active',
    'order_results_by': 'start_time:asc',
    'start_time_after': '2025-10-01T00:00:00Z',
    'max_start_time': '2025-10-31T23:59:59Z',
    'pagination_token': 'token_456',
    'number_of_events_to_return': 25,
    'group_uri': 'https://api.calendly.com/groups/GROUP321'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
