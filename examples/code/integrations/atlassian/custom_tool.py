from typing import Annotated, Optional

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import Atlassian


@tool(
    requires_auth=Atlassian(
        scopes=["read:jira-work"],
    )
)
async def list_projects(
    context: ToolContext,
    query: Annotated[
        Optional[str],
        "The query to filter the projects by. Defaults to empty string to list all projects.",
    ] = "",
) -> Annotated[dict, "The list of projects in a user's Jira instance"]:
    """List a Jira user's projects."""
    url = f"https://api.atlassian.com/ex/jira/<cloudId>/rest/api/3/project/search?query={query}"
    headers = {"Authorization": f"Bearer {context.authorization.token}"}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
