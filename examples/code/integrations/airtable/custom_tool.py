from typing import Annotated

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import OAuth2


@tool(requires_auth=OAuth2(id="arcade-airtable", scopes=["data.records:read", "data.records:write", "schema.bases:read"]))
async def get_airtable_bases(
    context: ToolContext,
) -> Annotated[dict, "List of Airtable bases"]:
    """Get all bases the authenticated user has access to."""
    if not context.authorization or not context.authorization.token:
        raise ValueError("No token found in context")

    url = "https://api.airtable.com/v0/meta/bases"
    headers = {
        "Authorization": f"Bearer {context.authorization.token}",
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()

