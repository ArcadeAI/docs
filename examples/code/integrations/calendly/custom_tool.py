from typing import Annotated

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import OAuth2


@tool(requires_auth=OAuth2(id="arcade-calendly", scopes=["default"]))
async def get_calendly_user(
    context: ToolContext,
) -> Annotated[dict, "Calendly user information"]:
    """Get the authenticated user's Calendly profile information."""
    if not context.authorization or not context.authorization.token:
        raise ValueError("No token found in context")

    url = "https://api.calendly.com/users/me"
    headers = {
        "Authorization": f"Bearer {context.authorization.token}",
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()

