import Arcade from "@arcadeai/arcadejs";

// You can also set the `ARCADE_API_KEY` environment variable instead of passing it as a parameter.
const client = new Arcade({ apiKey: "arcade_api_key" });

// Arcade needs a unique identifier for your application user (this could be an email address, a UUID, etc).
// In this example, simply use your email address as the user ID:
let userId = "you@example.com";

// Let's use the `Math.Sqrt` tool from the Arcade Math toolkit to get the square root of a number.
const response_sqrt = await client.tools.execute({
  tool_name: "Math.Sqrt",
  input: { a: "625" },
  user_id: userId,
});

console.log(`The square root of 625 is ${response_sqrt.output.value}`);

// Now, let's use a tool that requires authentication to star a GitHub repository

const authResponse = await client.tools.authorize({
  tool_name: "GitHub.SetStarred",
  user_id: userId,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
  console.log(`re-run the script after authorizing`);
  process.exit(1);
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
