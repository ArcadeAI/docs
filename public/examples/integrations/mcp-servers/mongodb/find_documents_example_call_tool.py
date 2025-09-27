import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "MongoDB.FindDocuments"

user_id = "{arcade_user_id}"

tool_input = {
    "database_name": "my_database",
    "collection_name": "users",
    "filter_dict": json.dumps({"status": "active", "age": {"$gte": 18}}),
    "projection": json.dumps({"name": 1, "email": 1, "_id": 0}),
    "sort": [json.dumps({"field": "name", "direction": 1})],
    "limit": 10,
    "skip": 0
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=user_id,
)

print(response.output.value)
