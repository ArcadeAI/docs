from typing import Annotated

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import Microsoft


@tool(
    requires_auth=Microsoft(
        scopes=["User.Read", "Files.Read"],
    )
)
async def get_file_contents(
    context: ToolContext,
    file_id: Annotated[str, "The ID of the file to get the contents of"],
) -> Annotated[str, "The contents of the file"]:
    """Get the contents of a file from Microsoft Graph."""
    url = f"https://graph.microsoft.com/v1.0/me/drive/items/{file_id}"
    headers = {"Authorization": f"Bearer {context.authorization.token}"}

    async with httpx.AsyncClient() as client:
        response = await client.get(
            url=url,
            headers=headers,
        )
        response.raise_for_status()
        return response.json()
