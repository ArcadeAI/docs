import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "you@example.com";
const TOOL_NAME = "Microsoft.UpdateDraftEmail";

// Start the authorization process
const authResponse = await client.tools.authorize({
  tool_name: TOOL_NAME,
  user_id: USER_ID,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  message_id: "1234567890",
  subject: "My new subject",
  body: "My new body",
  to_add: ["johndoe@example.com"],
  to_remove: ["a@example.com"],
  cc_add: ["b@example.com"],
  cc_remove: ["c@example.com"],
  bcc_add: ["d@example.com"],
  bcc_remove: ["e@example.com"],
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(response);
