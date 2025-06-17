from typing import Annotated

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import Asana


@tool(requires_auth=Asana(scopes=["default"]))
async def delete_task(
    context: ToolContext,
    task_id: Annotated[str, "The ID of the task to delete."],
) -> Annotated[dict, "Details of the deletion response"]:
    """Deletes a task."""
    url = f"https://api.asana.com/api/1.0/tasks/{task_id}"
    headers = {
        "Authorization": f"Bearer {context.get_auth_token_or_empty()}",
        "Accept": "application/json",
    }

    async with httpx.AsyncClient() as client:
        response = await client.delete(url, headers=headers)
        response.raise_for_status()
        return response.json()
