from arcade.client import Arcade
from arcade.client.schema import AuthProvider
from arcade.client.errors import APITimeoutError

client = Arcade(api_key="your_api_key")

user_id = "user@example.com"

# Start the authorization process
auth_response = client.auth.authorize(
    provider=AuthProvider.google,
    scopes=["https://www.googleapis.com/auth/gmail.readonly"],
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