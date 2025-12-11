import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade();
const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PagerDuty.ListServices";

const authResponse = await client.tools.authorize({ tool_name: TOOL_NAME, user_id: USER_ID });
if (authResponse.status !== "completed") {
  console.log(`Authorize here: ${authResponse.url}`);
}
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  query: null,
  limit: 10,
  offset: null,
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
