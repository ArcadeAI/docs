from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

# Use the token from the authorization response
creds = Credentials(auth_response.context.token)
service = build("gmail", "v1", credentials=creds)

# Now you can use the Google API
results = service.users().labels().list(userId="me").execute()
labels = results.get("labels", [])
print("Labels:", labels)
