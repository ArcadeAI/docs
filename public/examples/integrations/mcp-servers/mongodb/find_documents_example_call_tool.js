import { Arcade } from "arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "MongoDB.FindDocuments";

const userId = "{arcade_user_id}";

const toolInput = {
  database_name: "my_database",
  collection_name: "users",
  filter_dict: JSON.stringify({"status": "active", "age": {"$gte": 18}}),
  projection: JSON.stringify({"name": 1, "email": 1, "_id": 0}),
  sort: [JSON.stringify({"field": "name", "direction": 1})],
  limit: 10,
  skip: 0
};

const response = await client.tools.execute({
  toolName: TOOL_NAME,
  input: toolInput,
  userId: userId,
});

console.log(response.output.value);
