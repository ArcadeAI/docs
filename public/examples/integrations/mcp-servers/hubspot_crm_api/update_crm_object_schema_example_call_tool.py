import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "HubspotCrmApi.UpdateCrmObjectSchema"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'object_type_identifier': 'custom_object_123',
    'clear_description': False,
    'object_description': 'This is a custom object for tracking user interactions.',
    'object_singular_name': 'Interaction',
    'plural_labels': 'Interactions',
    'primary_display_property': 'interaction_name',
    'required_properties': ['user_id', 'timestamp'],
    'restorable': True,
    'searchable_properties': ['interaction_name', 'user_id'],
    'secondary_display_properties': ['status', 'category']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
