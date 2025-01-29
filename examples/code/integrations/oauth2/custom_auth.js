import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const userId = "user@example.com";

// Start the authorization process
let authResponse = await client.auth.start(userId, "hooli", [
  "scope1",
  "scope2",
]);

if (authResponse.status !== "completed") {
  console.log("Please complete the authorization challenge in your browser:");
  console.log(authResponse.url);
}

// Wait for the authorization to complete
authResponse = await client.auth.waitForCompletion(authResponse);

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const token = authResponse.context.token;
// TODO: Do something interesting with the token...
