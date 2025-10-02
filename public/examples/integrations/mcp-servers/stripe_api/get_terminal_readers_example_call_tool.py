import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetTerminalReaders"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_by_device_type': 'stripe_s700',
    'object_return_limit': 25,
    'filter_by_location_id': 'loc_1A2b3C4d',
    'filter_by_status': 'online',
    'expand_response_fields': ['configuration', 'last_connection'],
    'pagination_start_object_id': 'trr_0001',
    'filter_by_serial_number': 'SN12345'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
