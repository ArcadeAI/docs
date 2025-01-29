import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const userId = "user@example.com";

/*
In this example, we will use Arcade to authenticate with Google and
retrieve Gmail messages.

There is a tool for that in the Arcade SDK, which simplifies the process for
you to retrieve email messages either through our Python or JavaScript
SDKs or via LLM tool calling.

Below we are just showing how to use Arcade as an auth provider, if you ever
need to.
*/

// Start the authorization process
let authResponse = await client.auth.start(userId, "google", {
  scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
});

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

// Use the Google Gmail API
const response = await fetch(
  "https://gmail.googleapis.com/gmail/v1/users/me/messages",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();
const emailMessages = data.messages || [];

// Return a list of ids and thread ids
console.log(emailMessages);
