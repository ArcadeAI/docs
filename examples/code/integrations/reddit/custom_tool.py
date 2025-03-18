from typing import Annotated

import httpx

from arcade.sdk import ToolContext, tool
from arcade.sdk.auth import Reddit


@tool(
    requires_auth=Reddit(
        scopes=["identity"],
    )
)
async def get_user_info(
    context: ToolContext,
) -> Annotated[dict, "The user info"]:
    """Get the user info for the current user."""
    url = "https://oauth.reddit.com/api/v1/me"
    headers = {
        "Authorization": f"Bearer {context.authorization.token}",
        "User-Agent": "YourAppName v1.0 by u/YourRedditUsername",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
