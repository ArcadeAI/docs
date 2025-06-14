from typing import Annotated

import httpx
from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import Notion


@tool(requires_auth=Notion())
async def search_page_by_title(
    context: ToolContext,
    title_includes: Annotated[str, "The text to compare against page and database titles."],
) -> Annotated[dict, "The matching pages."]:
    """
    Search for a Notion page by its title.
    """
    url = "https://api.notion.com/v1/search"
    headers = {
        "Authorization": context.authorization.token,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
    }
    payload = {"query": title_includes, "filter": {"property": "object", "value": "page"}}

    async with httpx.AsyncClient() as client:
        response = await client.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return dict(response.json())
