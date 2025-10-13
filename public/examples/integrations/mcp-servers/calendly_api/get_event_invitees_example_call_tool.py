import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "CalendlyApi.GetEventInvitees"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'event_unique_identifier': 'evt_9a3f4b2c',
    'invitee_status': 'active',
    'sort_order_by_creation': 'asc',
    'filter_by_email': 'alex@example.com',
    'pagination_token': 'page_2_token',
    'number_of_invitees_to_return': 25
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
