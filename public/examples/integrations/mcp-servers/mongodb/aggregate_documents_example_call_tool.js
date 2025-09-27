import { Arcade } from "arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "MongoDB.AggregateDocuments";

const userId = "{arcade_user_id}";

const toolInput = {
  database_name: "my_database",
  collection_name: "users",
  pipeline: [
    JSON.stringify({"$match": {"status": "active"}}),
    JSON.stringify({"$group": {"_id": "$category", "count": {"$sum": 1}}}),
    JSON.stringify({"$sort": {"count": -1}})
  ],
  limit: 20
};

const response = await client.tools.execute({
  toolName: TOOL_NAME,
  input: toolInput,
  userId: userId,
});

console.log(response.output.value);
