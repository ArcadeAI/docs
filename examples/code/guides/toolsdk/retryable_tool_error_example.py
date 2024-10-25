from typing import Annotated

from slack_sdk import WebClient

from arcade.sdk.errors import RetryableToolError
from arcade.sdk import ToolContext, tool
from arcade.sdk.auth import Slack


@tool(
    requires_auth=Slack(
        scopes=[
            "chat:write",
            "im:write",
            "users.profile:read",
            "users:read",
        ],
    )
)
def send_dm_to_user(
    context: ToolContext,
    user_name: Annotated[
        str,
        "The Slack username of the person you want to message. Slack usernames are ALWAYS lowercase.",
    ],
    message: Annotated[str, "The message you want to send"],
) -> Annotated[str, "A confirmation message that the DM was sent"]:
    """Send a direct message to a user in Slack."""

    slackClient = WebClient(token=context.authorization.token)

    # Step 1: Retrieve the user's Slack ID based on their username
    userListResponse = slackClient.users_list()
    user_id = None
    for user in userListResponse["members"]:
        if user["name"].lower() == user_name.lower():
            user_id = user["id"]
            break

    # If the user is not found, raise a RetryableToolError with a
    # list of all valid inputs for the user_name parameter
    if not user_id:
        raise RetryableToolError(
            "User not found",
            developer_message=f"User with username '{user_name}' not found.",
            additional_prompt_content=f"Valid values for user_name input param: {userListResponse}",
            retry_after_ms=500,
        )

    # Step 2: Retrieve the DM channel ID with the user
    im_response = slackClient.conversations_open(users=[user_id])
    dm_channel_id = im_response["channel"]["id"]

    # Step 3: Send the DM
    slackClient.chat_postMessage(channel=dm_channel_id, text=message)

    return "DM sent successfully"
