from typing import Annotated

import httpx

from arcade.core.schema import ToolContext
from arcade.sdk import tool
from arcade.sdk.auth import Spotify


@tool(
    requires_auth=Spotify(
        scopes=["user-read-playback-state"],
    )
)
async def get_playback_state(
    context: ToolContext,
) -> Annotated[dict, "Information about the user's current playback state"]:
    """Get information about the user's current playback state, including track or episode, progress, and active device."""
    endpoint = "/me/player"
    headers = {"Authorization": f"Bearer {context.authorization.token}"}

    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"https://api.spotify.com/v1/{endpoint}",
            headers=headers,
        )
        response.raise_for_status()

        if response.status_code == 204:
            return {"status": "Playback not available or active"}
        return response.json()
