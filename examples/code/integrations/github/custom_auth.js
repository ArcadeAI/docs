import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const userId = "{arcade_user_id}";

/*
In this example, we will use Arcade to authenticate with GitHub and retrieve
the number of stargazers of the ArcadeAI/arcade-ai repository.

There is a tool for that in the Arcade SDK, which simplifies the process for
you to interact with GitHub either through our Python or JavaScript SDKs or via
LLM tool calling.

Below we are just showing how to use Arcade as an auth provider, if you ever
need to.
*/

// Start the authorization process
let authResponse = await client.auth.start(userId, "github");

if (authResponse.status !== "completed") {
  console.log("Please complete the authorization challenge in your browser:");
  console.log(authResponse.url);
}

// Wait for the authorization to complete
authResponse = await client.auth.waitForCompletion(authResponse);

if (!authResponse.context.token) {
  throw new Error("No token found in auth response");
}

const token = authResponse.context.token;

const owner = "ArcadeAI";
const name = "arcade-ai";
const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
};
const url = `https://api.github.com/repos/${owner}/${name}`;

const response = await fetch(url, { headers });
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
const data = await response.json();
console.log(data.stargazers_count);
