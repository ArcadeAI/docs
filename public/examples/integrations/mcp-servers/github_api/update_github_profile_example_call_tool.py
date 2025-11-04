import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GithubApi.UpdateGithubProfile"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'is_hireable': True,
    'new_blog_url': 'https://myblog.com',
    'new_company_name': 'Tech Innovations',
    'new_location': 'San Francisco, CA',
    'new_twitter_username': 'mytwitterhandle',
    'new_user_biography': 'Software engineer with a passion for open source.',
    'new_user_name': 'John Doe',
    'public_visible_email_address': 'john.doe@example.com'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
