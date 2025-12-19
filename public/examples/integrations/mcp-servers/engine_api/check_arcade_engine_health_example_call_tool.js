import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "EngineApi.CheckArcadeEngineHealth";

const toolInput = {};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
});

console.log(JSON.stringify(response.output.value, null, 2));
