from typing import Annotated

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import OAuth2


@tool(requires_auth=OAuth2(id="arcade-pagerduty", scopes=["read", "write"]))
async def get_pagerduty_incidents(
    context: ToolContext,
) -> Annotated[dict, "List of PagerDuty incidents"]:
    """Get all incidents from PagerDuty."""
    if not context.authorization or not context.authorization.token:
        raise ValueError("No token found in context")

    url = "https://api.pagerduty.com/incidents"
    headers = {
        "Authorization": f"Bearer {context.authorization.token}",
        "Accept": "application/vnd.pagerduty+json;version=2",
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()

