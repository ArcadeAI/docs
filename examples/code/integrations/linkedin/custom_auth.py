import requests

from arcadepy import Arcade


client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

user_id = "user@example.com"

# Start the authorization process
auth_response = client.auth.start(
    user_id=user_id,
    provider="linkedin",
    scopes=["w_member_social"],
)

if auth_response.status != "completed":
    print("Please complete the authorization challenge in your browser:")
    print(auth_response.url)

# Wait for the authorization to complete
auth_response = client.auth.wait_for_completion(auth_response)

if not auth_response.context.token:
    raise ValueError("No token found in auth response")

token = auth_response.context.token

# We will not post a message to LinkedIn in this example

# The user_id is needed by the LinkedIn API
user_id = (
    None
    if not auth_response.context.authorization
    else auth_response.context.authorization.user_info.get("sub")
)

if not user_id:
    raise ValueError("User ID not found.")

# Prepare the payload data for the LinkedIn API
message = "Hello, from Arcade.dev!"
payload = {
    "author": f"urn:li:person:{user_id}",
    "lifecycleState": "PUBLISHED",
    "specificContent": {
        "com.linkedin.ugc.ShareContent": {
            "shareCommentary": {"text": message},
            "shareMediaCategory": "NONE",
        }
    },
    "visibility": {"com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"},
}

# Send the request to the LinkedIn API
response = requests.post(
    "https://api.linkedin.com/v2/ugcPosts",
    headers={"Authorization": f"Bearer {token}"},
    json=payload,
)
response.raise_for_status()
print(response.json())
