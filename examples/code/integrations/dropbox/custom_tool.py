from typing import Annotated, Optional

import httpx

from arcade.sdk import ToolContext, tool
from arcade.sdk.auth import Dropbox


@tool(
    requires_auth=Dropbox(
        scopes=["files.metadata.read"],
    )
)
async def list_files(
    context: ToolContext,
    path: Annotated[
        Optional[str],
        "The path to the folder to list the contents of. Defaults to empty string to list the root folder.",
    ] = "",
) -> Annotated[dict, "List of servers the user is a member of"]:
    """Starts returning the contents of a folder."""
    url = "https://api.dropboxapi.com/2/files/list_folder"
    headers = {"Authorization": f"Bearer {context.authorization.token}"}

    async with httpx.AsyncClient() as client:
        response = await client.post(url, headers=headers, json={"path": path})
        response.raise_for_status()
        return response.json()
