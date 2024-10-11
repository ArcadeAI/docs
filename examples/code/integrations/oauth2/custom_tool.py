from typing import Annotated

from arcade.core.schema import ToolContext
from arcade.sdk import tool
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

    token = context.authorization.token
    # Do something interesting with the token...
