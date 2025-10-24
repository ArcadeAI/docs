import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.ListApps"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_by_app_name': 'MyApp',
    'filter_by_creator_email': 'creator@example.com',
    'filter_by_tags': 'tag1,tag2',
    'include_published_apps': True,
    'page_number': 1,
    'page_size': 10,
    'sort_fields_and_directions': ['name:asc', 'created_at:desc']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
