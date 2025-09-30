import { Arcade } from "arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "MongoDB.DiscoverCollections";

const userId = "{arcade_user_id}";

const toolInput = {
  database_name: "my_database"
};

const response = await client.tools.execute({
  toolName: TOOL_NAME,
  input: toolInput,
  userId: userId,
});

console.log(response.output.value);
