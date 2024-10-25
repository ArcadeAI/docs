from typing import Annotated, Optional

import httpx

from arcade.sdk import ToolContext, tool
from arcade.sdk.auth import Zoom


@tool(
    requires_auth=Zoom(
        scopes=["meeting:read:list_upcoming_meetings"],
    )
)
async def list_upcoming_meetings(
    context: ToolContext,
    user_id: Annotated[
        Optional[str],
        "The user's user ID or email address. Defaults to 'me' for the current user.",
    ] = "me",
) -> Annotated[dict, "List of upcoming meetings within the next 24 hours"]:
    """List a Zoom user's upcoming meetings within the next 24 hours."""
    url = f"https://api.zoom.us/v2/users/{user_id}/upcoming_meetings"
    headers = {"Authorization": f"Bearer {context.authorization.token}"}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
