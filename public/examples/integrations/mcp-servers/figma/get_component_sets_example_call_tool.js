import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade();

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Figma.GetComponentSets";

const authResponse = await client.tools.authorize({tool_name: TOOL_NAME, user_id: USER_ID});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

await client.auth.waitForCompletion(authResponse);

const toolInput = {
  source: "file",  // Options: file, team
  source_id: "abc123xyz",  // File key or team ID
  page_size: 10,  // Optional: for team mode only
  after_cursor: null,  // Optional: for pagination in team mode
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));

