from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "Google.UpdateDraftEmail"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.auth_url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

inputs = {
    "id": "your_draft_id_here",  # The ID of a draft email can be found with the ListDraftEmails tool
    "subject": "Updated Project Update",
    "body": "Please find the updated project update attached.",
    "recipient": "john.doe@example.com",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
