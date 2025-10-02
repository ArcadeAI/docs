import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZoomMeetingsApi.GetMeetingActivityLogs"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'start_date': '2025-09-01',
    'end_date': '2025-09-30',
    'activity_type': 'Meeting Started',
    'number_of_records_per_call': 100,
    'pagination_token': 'abc123token',
    'meeting_number': '123456789',
    'operator_name_or_email': 'alice@example.com'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
