import os
from arcade.client import Arcade
import json

USER_ID = "you@example.com"
TOOL_NAME = "Web.ScrapeUrl"

client = Arcade(
    base_url="https://api.arcade-ai.com", api_key=os.environ.get("ARCADE_API_KEY")
)

inputs = {"url": "https://example.com", "formats": "Formats.MARKDOWN"}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=json.dumps(inputs),
    user_id=USER_ID,
)
print(response)
