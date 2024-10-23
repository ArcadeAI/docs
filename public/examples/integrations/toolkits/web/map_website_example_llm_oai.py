import os
from arcade.client import Arcade

USER_ID = "you@example.com"
TOOL_NAME = "Web.MapWebsite"

client = Arcade(
    base_url="https://api.arcade-ai.com", api_key=os.environ.get("ARCADE_API_KEY")
)

inputs = {"url": "https://example.com"}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
