import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade({ baseURL: "https://api.arcade.dev" }); // Automatically finds the `ARCADE_API_KEY` env variable

const userId = "{arcade_user_id}";

// Start the authorization process
const authResponse = await client.auth.start(userId, "asana", {
  scopes: ["default"],
});

if (authResponse.status !== "completed") {
  console.log("Please complete the authorization challenge in your browser:");
  console.log(authResponse.url);
}

// Wait for the authorization to complete
const response = await client.auth.waitForCompletion(authResponse);

// Do something interesting with the token...
const auth_token = response.context.token;
