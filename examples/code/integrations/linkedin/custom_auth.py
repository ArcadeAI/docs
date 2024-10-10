from arcade.client.errors import APITimeoutError
from arcade.client.schema import AuthProvider

user_id = "user@example.com"

# Start the authorization process
auth_response = client.auth.authorize(
    provider=AuthProvider.linkedin,
    scopes=["w_member_social"],
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
