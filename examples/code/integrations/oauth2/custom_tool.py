from typing import Annotated

from arcade.sdk import ToolContext, tool
from arcade.sdk.auth import OAuth2


@tool(
    requires_auth=OAuth2(
        provider_id="hooli",
        scopes=["scope1", "scope2"],
    )
)
async def reticulate_splines(
    context: ToolContext,
    num_splines: Annotated[int, "The number of splines to reticulate"],
):
    """Reticulate the specified number of splines."""

    # Get an access token to call an API
    token = context.authorization.token

    # Get user info (if configured and supported by the OAuth 2.0 server):
    user_id = context.authorization.user_info.get("sub")
