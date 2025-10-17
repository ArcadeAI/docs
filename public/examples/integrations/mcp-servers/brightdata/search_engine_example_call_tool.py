import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Brightdata.SearchEngine"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'query': 'best noise cancelling headphones 2025',
    'engine': 'google',
    'language': 'en',
    'country_code': 'us',
    'search_type': 'shopping',
    'start': 0,
    'num_results': 5,
    'location': 'San Francisco, CA',
    'device': 'android',
    'return_json': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
