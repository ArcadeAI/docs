import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.TrelloBatchGetRequests"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'api_routes_list': [   '/boards/5abbe4b7ddc1b351ef961414',
                           '/boards/5abbe4b7ddc1b351ef961414/lists',
                           '/boards/5abbe4b7ddc1b351ef961414/cards',
                           '/members/me',
                           '/organizations/4d5ea62fd76aa1136000000c',
                           '/cards/54d5ea62fd76aa1136000000d',
                           '/lists/54d5ea62fd76aa1136000000e',
                           '/tokens/abcd1234/tokeninfo',
                           '/actions/5c2a1b2f3d4e5f6a7b8c9d0e',
                           '/search?query=project&modelTypes=boards,cards']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
