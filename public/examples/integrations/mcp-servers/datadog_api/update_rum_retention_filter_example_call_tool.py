import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.UpdateRumRetentionFilter"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_id': '123e4567-e89b-12d3-a456-426614174000',
    'retention_filter_id': 'abc123',
    'rum_application_id': 'app456',
    'enable_retention_filter': True,
    'filter_name': 'User Session Filter',
    'resource_type': 'retention_filters',
    'rum_event_type_filter': 'session',
    'rum_retention_filter_query': 'status:active',
    'sample_rate': 50
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
