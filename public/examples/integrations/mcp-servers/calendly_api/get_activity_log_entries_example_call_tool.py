import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "CalendlyApi.GetActivityLogEntries"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'organization_uri': 'https://api.calendly.com/organizations/ORG123',
    'filter_by_search_term': '"jane.doe@example.com" +(meeting) -spam',
    'actor_uris': ['https://api.calendly.com/users/USER1', 'https://api.calendly.com/users/USER2'],
    'sort_order': ['date:desc'],
    'include_entries_after_time': '2025-09-01T00:00:00.000Z',
    'end_time_utc': '2025-09-30T23:59:59.000Z',
    'next_page_token': 'abc123token',
    'number_of_rows_to_return': 50,
    'entry_categories': ['event_created', 'event_canceled'],
    'filter_by_actions': ['invite_sent', 'invite_updated']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
