from typing import Annotated

from arcade.sdk import ToolContext, tool
from arcade.sdk.auth import GitHub


@tool(requires_auth=GitHub())
async def count_stargazers(
    context: ToolContext,
    owner: Annotated[str, "The owner of the repository"],
    name: Annotated[str, "The name of the repository"],
) -> Annotated[int, "The number of stargazers (stars) for the specified repository"]:
    """Count the number of stargazers (stars) for a GitHub repository."""

    token = context.authorization.token
    # TODO: Call the GitHub API with this token!
