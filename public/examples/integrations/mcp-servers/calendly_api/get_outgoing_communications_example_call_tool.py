import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "CalendlyApi.GetOutgoingCommunications"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'organization_uri': 'https://api.example.com/orgs/12345',
    'number_of_records': 25,
    'filter_communications_after': '2025-01-01T00:00:00.000Z',
    'end_date_time_utc': '2025-10-01T00:00:00.000Z',
    'pagination_token': 'eyJwIjoibmV4dCJ9'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
