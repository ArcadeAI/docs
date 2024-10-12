from arcade.client.errors import APITimeoutError
from arcade.client import Arcade, AuthProvider

client = Arcade()

user_id = "user@example.com"

# Start the authorization process
auth_response = client.auth.authorize(
    provider=AuthProvider.x,
    scopes=["tweet.read", "tweet.write", "users.read"],
    user_id=user_id,
)

if auth_response.status != "completed":
    print("Please complete the authorization challenge in your browser:")
    print(auth_response.auth_url)

while auth_response.status != "completed":
    try:
        auth_response = client.auth.status(auth_response, wait=60)
    except APITimeoutError:
        continue

token = auth_response.context.token
# Do something interesting with the token...
