from arcadepy import Arcade
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

user_id = "user@example.com"

"""
In this example, we will use Arcade to authenticate with Google and
retrieve Gmail messages.

There is a tool for that in the Arcade SDK, which simplifies the process for
you to retrieve email messages either through our Python or JavaScript
SDKs or via LLM tool calling.

Below we are just showing how to use Arcade as an auth provider, if you ever
need to.
"""

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

token = auth_response.context.token

if not token:
    raise ValueError("No token found in auth response")

credentials = Credentials(token)
gmail = build("gmail", "v1", credentials=credentials)

email_messages = (
    gmail.users().messages().list(userId="me").execute().get("messages", [])
)

print(email_messages)
