from typing import Annotated, Optional

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import Twitch


@tool(
    requires_auth=Twitch(
        scopes=["channel:manage:polls"],
    )
)
async def create_poll(
    context: ToolContext,
    broadcaster_id: Annotated[
        str,
        "The ID of the broadcaster to create the poll for.",
    ],
    title: Annotated[
        str,
        "The title of the poll.",
    ],
    choices: Annotated[
        list[str],
        "The choices of the poll.",
    ],
    duration: Annotated[
        int,
        "The duration of the poll in seconds.",
    ],
) -> Annotated[dict, "The poll that was created"]:
    """Create a poll for a Twitch channel."""
    url = "https://api.twitch.tv/helix/polls"
    headers = {
        "Authorization": f"Bearer {context.authorization.token}",
        "Client-Id": "your_client_id",
        "Content-Type": "application/json",
    }
    payload = {
        "broadcaster_id": broadcaster_id,
        "title": title,
        "choices": [{"title": choice} for choice in choices],
        "duration": duration,
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
