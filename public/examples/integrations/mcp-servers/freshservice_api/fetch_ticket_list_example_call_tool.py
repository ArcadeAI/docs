import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "FreshserviceApi.FetchTicketList"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'ticket_filter_type': 'new_and_my_open',
    'requester_email_filter': 'jane.doe@example.com',
    'filter_by_requester_id': 9876,
    'filter_by_updated_since': '2025-10-01T00:00:00Z',
    'fields_to_include_in_response': 'requester',
    'sort_order': 'desc'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
