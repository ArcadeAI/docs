from typing import Annotated

import httpx
from arcade.sdk import ToolContext, tool
from arcade.sdk.auth import GitHub


@tool(requires_auth=GitHub())
async def count_stargazers(
    context: ToolContext,
    owner: Annotated[str, "The owner of the repository"],
    name: Annotated[str, "The name of the repository"],
) -> Annotated[int, "The number of stargazers (stars) for the specified repository"]:
    """Count the number of stargazers (stars) for a GitHub repository."""
    if not context.authorization or not context.authorization.token:
        raise ValueError("No token found in context")

    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": f"Bearer {context.authorization.token}",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    url = f"https://api.github.com/repos/{owner}/{name}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json().get("stargazers_count", 0)
