from arcade.client.schema import AuthProvider

user_id = "user@example.com"

# Start the authorization process
auth_response = client.auth.authorize(
    provider=AuthProvider.github,
    user_id=user_id,
)
