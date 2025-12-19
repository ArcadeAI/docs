import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "MailchimpMarketingApi.CreateMailchimpSegment"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'list_unique_id': 'abc123',
    'segment_name': 'Active Customers',
    'emails_for_static_segment': ['customer1@example.com', 'customer2@example.com'],
    'segment_match_conditions': [   {   'field': 'last_purchase_date',
                                        'operator': '>',
                                        'value': '2023-01-01'}],
    'segment_match_type': 'all'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
