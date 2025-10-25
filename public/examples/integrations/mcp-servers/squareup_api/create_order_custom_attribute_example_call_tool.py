import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.CreateOrderCustomAttribute"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'creation_timestamp': '2023-10-01T12:00:00Z',
    'custom_attribute_definition_key': 'order_priority',
    'custom_attribute_definition_name': 'Order Priority',
    'custom_attribute_description': 'Indicates the priority level of the order.',
    'custom_attribute_schema': {'type': 'string', 'enum': ['low', 'medium', 'high']},
    'custom_attribute_visibility': 'VISIBILITY_READ_WRITE_VALUES',
    'unique_request_id': '123e4567-e89b-12d3-a456-426614174000'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
