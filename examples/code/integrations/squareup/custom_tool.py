from typing import Annotated

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import OAuth2


@tool(requires_auth=OAuth2(id="arcade-squareup", scopes=["MERCHANT_PROFILE_READ", "PAYMENTS_READ"]))
async def get_square_locations(
    context: ToolContext,
) -> Annotated[dict, "List of Square locations"]:
    """Get all business locations for the authenticated Square account."""
    if not context.authorization or not context.authorization.token:
        raise ValueError("No token found in context")

    url = "https://connect.squareup.com/v2/locations"
    headers = {
        "Authorization": f"Bearer {context.authorization.token}",
        "Content-Type": "application/json",
        "Square-Version": "2024-10-17",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()

