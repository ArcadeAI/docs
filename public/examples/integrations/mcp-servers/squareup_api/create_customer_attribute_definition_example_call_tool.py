import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.CreateCustomerAttributeDefinition"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'attribute_definition_name': 'LoyaltyPoints',
    'custom_attribute_key': 'loyalty.points',
    'custom_attribute_schema': {'type': 'object', 'properties': {'points': {'type': 'integer'}}},
    'custom_attribute_visibility': 'VISIBILITY_READ_WRITE_VALUES',
    'customer_attribute_description': 'Points earned through purchases',
    'idempotency_key': 'unique-request-12345'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
