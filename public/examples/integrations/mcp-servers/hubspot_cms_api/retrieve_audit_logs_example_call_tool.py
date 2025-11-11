import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "HubspotCmsApi.RetrieveAuditLogs"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'event_types': ['CREATED', 'UPDATED'],
    'filter_by_object_ids': ['123', '456'],
    'filter_by_object_type': ['BLOG', 'LANDING_PAGE'],
    'number_of_logs_to_return': 10,
    'sort_direction': ['desc'],
    'timestamp_after': '2023-01-01T00:00:00Z',
    'user_ids_to_filter': ['user1', 'user2']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
