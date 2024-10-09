import json
from arcade.client import Arcade

client = Arcade()

USER_ID = "you@example.com"
TOOL_NAME = "Search.SearchGoogle"

inputs = {
    'query': 'Arcade AI documentation',
    'n_results': 5
}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=json.dumps(inputs),
    user_id=USER_ID,
)
print(response)
