import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "HubspotCrmApi.GetHubspotDiscounts"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'associated_object_types': ['contact', 'company'],
    'maximum_results_per_page': 10,
    'paging_cursor_token': 'abc123',
    'properties_with_history': ['amount', 'expiration_date'],
    'return_only_archived': False,
    'returned_discount_properties': ['id', 'name', 'amount']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
