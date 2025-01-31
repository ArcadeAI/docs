import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "you@example.com";
const TOOL_NAME = "Web.MapWebsite";

const toolInput = {
  url: "https://example.com"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(response); 