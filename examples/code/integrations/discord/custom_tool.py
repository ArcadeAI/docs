from typing import Annotated, Optional

import httpx

from arcade.sdk import ToolContext, tool
from arcade.sdk.auth import Discord


@tool(
    requires_auth=Discord(
        scopes=["identify", "email", "guilds", "guilds.join"],
    )
)
async def list_upcoming_meetings(
    context: ToolContext,
    user_id: Annotated[
        Optional[str],
        "The user's user ID or email address. Defaults to 'me' for the current user.",
    ] = "@me",
) -> Annotated[dict, "List of servers the user is a member of"]:
    """List a Discord user's servers they are a member of."""
    url = f"https://discord.com/api/users/{user_id}/guilds"
    headers = {"Authorization": f"Bearer {context.authorization.token}"}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
