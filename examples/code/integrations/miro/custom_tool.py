from typing import Annotated

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import OAuth2


@tool(requires_auth=OAuth2(id="arcade-miro", scopes=["boards:read", "boards:write"]))
async def get_miro_boards(
    context: ToolContext,
) -> Annotated[dict, "List of Miro boards"]:
    """Get all boards the authenticated user has access to."""
    if not context.authorization or not context.authorization.token:
        raise ValueError("No token found in context")

    url = "https://api.miro.com/v2/boards"
    headers = {
        "Authorization": f"Bearer {context.authorization.token}",
        "Accept": "application/json",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()

