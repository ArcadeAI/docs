import json
from arcade.client import Arcade

client = Arcade()

USER_ID = "you@example.com"
TOOL_NAME = "Github.CreateReplyForReviewComment"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.auth_url}")
    input("After you have authorized, press Enter to continue...")

inputs = {
    'owner': 'ArcadeAI',
    'repo': 'hello-world',
    'pull_number': 1,
    'comment_id': 1,
    'body': 'This is a reply.'
}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=json.dumps(inputs),
    user_id=USER_ID,
)
print(response)