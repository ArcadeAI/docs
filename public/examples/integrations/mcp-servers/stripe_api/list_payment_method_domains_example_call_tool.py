import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.ListPaymentMethodDomains"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'domain_name': 'payments.example.com',
    'pagination_cursor_ending_before': 'cursor_abc123',
    'fields_to_expand': ['webhooks', 'settings'],
    'limit_number_of_returned_objects': 25,
    'pagination_cursor_starting_after': 'cursor_def456',
    'include_enabled_domains': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
