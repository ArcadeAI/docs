from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

user_id = "{arcade_user_id}"

# Start the authorization process
auth_response = client.auth.start(
    user_id=user_id,
    provider="arcade-miro",
    scopes=["boards:read", "boards:write"],
)

if auth_response.status != "completed":
    print("Please complete the authorization challenge in your browser:")
    print(auth_response.url)

# Wait for the authorization to complete
auth_response = client.auth.wait_for_completion(auth_response)

if not auth_response.context.token:
    raise ValueError("No token found in auth response")

token = auth_response.context.token
# TODO: Do something interesting with the token...

