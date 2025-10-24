import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.CreateNewDatastore"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'datastore_description': 'This datastore holds user activity logs.',
    'datastore_display_name': 'User Activity Logs',
    'datastore_resource_type': 'datastores',
    'organization_access_level': 'manager',
    'primary_key_column_name': 'user_id',
    'primary_key_generation_strategy': 'uuid'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
