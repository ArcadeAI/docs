import Arcade from "@arcadeai/arcadejs";

// You can also set the `ARCADE_API_KEY` environment variable instead of passing it as a parameter.
const client = new Arcade({
  apiKey: "{arcade_api_key}",
});

// Arcade needs a unique identifier for your application user (this could be an email address, a UUID, etc).
// In this example, use the email you used to sign up for Arcade.dev:
let userId = "{arcade_user_id}";

// Let's use the `Math.Sqrt` tool from the Arcade Math toolkit to get the square root of a number.
const response_sqrt = await client.tools.execute({
  tool_name: "Math.Sqrt",
  input: { a: "625" },
  user_id: userId,
});

console.log(response_sqrt.output.value);

// Now, let's use a tool that requires authentication

const authResponse = await client.tools.authorize({
  tool_name: "GitHub.SetStarred",
  user_id: userId,
});

if (authResponse.status !== "completed") {
  console.log(
    `Click this link to authorize: \`${authResponse.url}\`.  The process will continue once you have authorized the app.`,
  );
  // Wait for the user to authorize the app
  await client.auth.waitForCompletion(authResponse.id);
}

const response_github = await client.tools.execute({
  tool_name: "GitHub.SetStarred",
  input: {
    owner: "ArcadeAI",
    name: "arcade-ai",
    starred: true,
  },
  user_id: userId,
});

console.log(response_github.output.value);
