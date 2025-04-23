from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "Microsoft.UpdateDraftEmail"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "message_id": "1234567890",
    "subject": "My new subject",
    "body": "My new body",
    "to_add": ["johndoe@example.com"],
    "to_remove": ["a@example.com"],
    "cc_add": ["b@example.com"],
    "cc_remove": ["c@example.com"],
    "bcc_add": ["d@example.com"],
    "bcc_remove": ["e@example.com"],
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
