import { Arcade } from "arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "MongoDB.DiscoverDatabases";

const userId = "{arcade_user_id}";

const toolInput = {};

const response = await client.tools.execute({
  toolName: TOOL_NAME,
  input: toolInput,
  userId: userId,
});

console.log(response.output.value);
