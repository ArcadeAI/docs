---
title: "Retry Tools with Improved Prompt"
description: "Documentation for retrying tools with improved prompts in the Arcade Tool SDK"
---
[Create tools](/en/guides/create-tools/tool-basics.md)
[Handle errors](/en/guides/create-tools/error-handling.md)
Retry Tools with Improved Prompt

# RetryableToolError in Arcade

Sometimes you may want to retry a tool call with additional  to improve the  call’s input parameters predicted by the model and try again. You can do this by raising a `RetryableToolError` within the tool.

### Understanding RetryableToolError

Raising the `RetryableToolError` is useful when you want to retry the tool call and give the model that is generating the tool call’s input parameters additional  to improve the parameters for the next  call.

### When to Use RetryableToolError

A RetryableToolError should be raised from within a  if additional prompt content would likely improve the tool call outcome.

### Example: Sending a Direct Message in Slack

Below is an example of a  that sends a direct message to a  in Slack:

1.  If the specified user is not found, the  retrieves a list of all valid inputs for the `user_name` parameter.
2.  The  then raises a `RetryableToolError` with the list of valid inputs.
3.  This allows the model to generate a valid input for the `user_name` parameter in the next  call iteration.

```python
from typing import Annotated

from slack_sdk import WebClient

from arcade_core.errors import RetryableToolError
from arcade_mcp_server import Context, tool
from arcade_mcp_server.auth import Slack


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
    context: Context,
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
```

Last updated on January 5, 2026

[Overview](/en/guides/create-tools/error-handling.md)
[Provide Useful Tool Errors](/en/guides/create-tools/error-handling/useful-tool-errors.md)
