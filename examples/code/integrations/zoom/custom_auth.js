import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const userId = "{arcade_user_id}";

// Start the authorization process
let authResponse = await client.auth.start(userId, "zoom", [
  "meeting:read:list_upcoming_meetings",
]);

if (authResponse.status !== "completed") {
  console.log("Please complete the authorization challenge in your browser:");
  console.log(authResponse.url);
}

// Wait for the authorization to complete
authResponse = await client.auth.waitForCompletion(authResponse);

const token = authResponse.context.token;
// Do something interesting with the token...
