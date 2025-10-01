import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "MongoDB.CountDocuments"

user_id = "{arcade_user_id}"

tool_input = {
    "database_name": "my_database",
    "collection_name": "users",
    "filter_dict": json.dumps({"status": "active"})
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=user_id,
)

print(response.output.value)
