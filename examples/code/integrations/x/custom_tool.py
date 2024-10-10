from typing import Annotated

import httpx

from arcade.core.schema import ToolContext
from arcade.sdk import tool
from arcade.sdk.auth import X


@tool(
    requires_auth=X(
        scopes=["tweet.read", "tweet.write", "users.read"],
    )
)
async def post_tweet(
    context: ToolContext,
    tweet_text: Annotated[str, "The text content of the tweet you want to post"],
) -> Annotated[str, "Success string and the URL of the tweet"]:
    """Post a tweet to X (Twitter)."""
    url = "https://api.x.com/2/tweets"
    headers = {
        "Authorization": f"Bearer {context.authorization.token}",
        "Content-Type": "application/json",
    }
    payload = {"text": tweet_text}

    async with httpx.AsyncClient() as client:
        response = await client.post(url, headers=headers, json=payload)
        response.raise_for_status()

        tweet_id = response.json()["data"]["id"]
        return f"Tweet with id {tweet_id} posted successfully. URL: https://x.com/x/status/{tweet_id}"
