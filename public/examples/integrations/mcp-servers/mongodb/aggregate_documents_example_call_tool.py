import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "MongoDB.AggregateDocuments"

user_id = "{arcade_user_id}"

tool_input = {
    "database_name": "my_database",
    "collection_name": "users",
    "pipeline": [
        json.dumps({"$match": {"status": "active"}}),
        json.dumps({"$group": {"_id": "$category", "count": {"$sum": 1}}}),
        json.dumps({"$sort": {"count": -1}})
    ],
    "limit": 20
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=user_id,
)

print(response.output.value)
