import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade();

const userId = "{arcade_user_id}";

// Start the authorization process
const authResponse = await client.auth.start(userId, "dropbox", {
  scopes: ["openid", "sharing.read", "files.metadata.read"],
});

if (authResponse.status !== "completed") {
  console.log("Please complete the authorization challenge in your browser:");
  console.log(authResponse.url);
}

// Wait for the authorization to complete
authResponse = await client.auth.waitForCompletion(authResponse);

const token = authResponse.context.token;
// Do something interesting with the token...
