import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetBillingMeterEventSummaries"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'customer_id': 'cust_12345',
    'stop_aggregating_until': 1700000400,
    'start_time_timestamp': 1699996800,
    'meter_id': 'meter_cpu_hours',
    'pagination_ending_before_id': 'evt_98765',
    'fields_to_expand': ['usage_details', 'price_components'],
    'number_of_objects_limit': 25,
    'pagination_starting_after_id': 'evt_12345',
    'granularity_for_event_summaries': 'hour'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
