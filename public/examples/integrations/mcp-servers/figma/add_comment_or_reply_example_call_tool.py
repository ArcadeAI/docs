import json
from arcadepy import Arcade

client = Arcade()

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Figma.AddCommentOrReply"

auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=USER_ID)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

client.auth.wait_for_completion(auth_response)

# Example 1: Add a new comment to a node
tool_input = {
    "file_key": "abc123xyz",  # Replace with your Figma file key
    "message": "This design looks great!",
    "node_id": "0:1",  # Optional: attach to a specific node
    "x": 100.0,  # Optional: X position on the node
    "y": 200.0,  # Optional: Y position on the node
}

# Example 2: Reply to an existing comment
# tool_input = {
#     "file_key": "abc123xyz",
#     "message": "I agree!",
#     "parent_comment_id": "comment123",  # Reply to this comment
# }

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))

