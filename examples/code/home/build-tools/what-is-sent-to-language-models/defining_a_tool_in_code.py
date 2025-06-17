from enum import Enum
from typing import Annotated, Optional

from arcade.sdk.auth import Slack
from arcade.sdk import ToolContext, tool


class ConversationType(str, Enum):
    # Enum values are sent to the model
    PUBLIC_CHANNEL = "public_channel"
    PRIVATE_CHANNEL = "private_channel"
    MULTI_PERSON_DIRECT_MESSAGE = "multi_person_direct_message"
    DIRECT_MESSAGE = "direct_message"


@tool(
    requires_auth=Slack(
        scopes=["channels:read", "groups:read", "im:read", "mpim:read"],
    ) # Not sent to the model
)
async def list_conversations_metadata( # Tool name and toolkit name is sent to the model
    context: ToolContext, # ToolContext is never sent to the model
    conversation_types: Annotated[Optional[list[ConversationType]], "The type(s) of conversations to list. Defaults to all types."] = None, # Sent to the model
    limit: Annotated[Optional[int], "The maximum number of conversations to list."] = None, # Sent to the model
    next_cursor: Annotated[Optional[str], "The cursor to use for pagination." = None, # Sent to the model
) -> Annotated[dict,"The conversations metadata list and a pagination 'next_cursor', if there are more conversations to retrieve."]: # Not sent to the model
    """
    List metadata for Slack conversations (channels and/or direct messages) that the user
    is a member of.
    """ # Docstring is sent to the model
    # The body of the function is not sent to the model
    ...
