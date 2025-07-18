from typing import Annotated, Any

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import OAuth2

import httpx


@tool(
  requires_auth=OAuth2(id="zendesk", scopes=["read"]),
  requires_secrets=["ZENDESK_SUBDOMAIN"],
)
async def get_tickets(
  context: ToolContext
) -> Annotated[dict[str, Any], "Recent tickets from Zendesk"]:
    """Get recent tickets from Zendesk including basic ticket information"""
    token = context.get_auth_token_or_empty()
    subdomain = context.get_secret("ZENDESK_SUBDOMAIN")
    url = f"https://{subdomain}.zendesk.com/api/v2/tickets.json"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    async with httpx.AsyncClient() as client:
        resp = await client.get(url, headers=headers)
        resp.raise_for_status()
        data = resp.json()

        return {"tickets": data}
