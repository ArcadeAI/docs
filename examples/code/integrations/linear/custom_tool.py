from typing import Annotated, Any

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import Linear

import httpx


@tool(requires_auth=Linear(scopes=["read"]))
async def get_teams(context: ToolContext) -> Annotated[dict[str, Any], "Teams in the workspace with member information"]:
    """Get Linear teams and team information including team members"""
    token = context.get_auth_token_or_empty()
    url = "https://api.linear.app/graphql"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    query = """
    query Teams {
      teams {
        nodes {
          id
          name
          key
        }
      }
    }
    """

    async with httpx.AsyncClient() as client:
      resp = await client.post(url, json={"query": query}, headers=headers)
      resp.raise_for_status()
      data = resp.json()
      teams = data["data"]["teams"]["nodes"]
      return teams
