import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "HubspotCrmApi.GetSubscriptionDetails"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'subscription_id': 'sub_12345',
    'association_types_to_retrieve': ['user', 'plan'],
    'only_archived_results': False,
    'properties_with_history': ['status', 'payment_method'],
    'requested_properties': ['start_date', 'end_date'],
    'unique_property_name': 'subscription_code'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
