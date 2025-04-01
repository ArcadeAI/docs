from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "Reddit.ReplyToComment"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

# TODO: Replace with an identifier for a real comment
tool_input = {
    "comment_identifier": "https://www.reddit.com/r/TestSubreddit/comments/1abcdefg/comment/3abcdefg/",
    "text": "This is a test reply to a non-existent comment."
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
