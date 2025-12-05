import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade();

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Figma.AddCommentOrReply";

const authResponse = await client.tools.authorize({tool_name: TOOL_NAME, user_id: USER_ID});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

await client.auth.waitForCompletion(authResponse);

// Example 1: Add a new comment to a node
const toolInput = {
  file_key: "abc123xyz",  // Replace with your Figma file key
  message: "This design looks great!",
  node_id: "0:1",  // Optional: attach to a specific node
  x: 100.0,  // Optional: X position on the node
  y: 200.0,  // Optional: Y position on the node
};

// Example 2: Reply to an existing comment
// const toolInput = {
//   file_key: "abc123xyz",
//   message: "I agree!",
//   parent_comment_id: "comment123",  // Reply to this comment
// };

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));

