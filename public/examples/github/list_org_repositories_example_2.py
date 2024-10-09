import json
from arcade.client import Arcade

client = Arcade()

TOOL_NAME = "Github.ListOrgRepositories"
USER_ID = "test_user"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status == "requires_authorization":
    print(f"Click this link to authorize: {auth_response.auth_url}")
    input("After you have authorized, press Enter to continue...")

inputs = {
    'org': 'ArcadeAI',
    'sort': 'created',
    'sort_direction': 'desc',
    'per_page': 100,
    'page': 1,
    'include_extra_data': False
}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=json.dumps(inputs),
    user_id=USER_ID,
)
print(response.output.value["repositories"])
