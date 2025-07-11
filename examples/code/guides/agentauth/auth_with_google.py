from arcadepy import Arcade
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

"""
In this example, we will use Arcade to authenticate with Google and
retrieve Gmail messages.

Consider using the Arcade Gmail toolkit, which simplifies the process for
retrieving email messages even further!

Below we are just showing how to use Arcade as an auth provider, if you need to directly get a token to use with Google.
"""

# This would be your app's internal ID for the user (an email, UUID, etc.)
user_id = "user@example.com"

# Start the authorization process
auth_response = client.auth.start(
    user_id=user_id,
    provider="google",
    scopes=["https://www.googleapis.com/auth/gmail.readonly"],
)

if auth_response.status != "completed":
    print("Please complete the authorization challenge in your browser:")
    print(auth_response.url)

# Wait for the authorization to complete
auth_response = client.auth.wait_for_completion(auth_response)

if not auth_response.context.token:
    raise ValueError("No token found in auth response")

credentials = Credentials(auth_response.context.token)
gmail = build("gmail", "v1", credentials=credentials)

email_messages = (
    gmail.users().messages().list(userId="me").execute().get("messages", [])
)

print(email_messages)
