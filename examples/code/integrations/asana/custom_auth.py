from arcadepy import Arcade

client = Arcade(base_url="https://api.arcade.dev")  # Automatically finds the `ARCADE_API_KEY` env variable

user_id = "{arcade_user_id}"

# Start the authorization process
auth_response = client.auth.start(
    user_id=user_id,
    provider="asana",
    scopes=["default"],
)

if auth_response.status != "completed":
    print("Please complete the authorization challenge in your browser:")
    print(auth_response.url)

# Wait for the authorization to complete
auth_response = client.auth.wait_for_completion(auth_response)

# Do something interesting with the token...
auth_token = auth_response.context.token
