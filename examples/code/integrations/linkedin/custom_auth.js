import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const userId = "{arcade_user_id}";

/*
In this example, we will use Arcade to authenticate with LinkedIn and post a
message to the user's LinkedIn feed.

There is a tool for that in the Arcade SDK, which simplifies the process for
you to post messages to the user's LinkedIn feed either through our Python or
JavaScript SDKs or via LLM tool calling.

Below we are just showing how to use Arcade as an auth provider, if you ever
need to.
*/

// Start the authorization process
let authResponse = await client.auth.start(userId, "linkedin", {
  scopes: ["w_member_social"],
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

const linkedInUserId = authResponse.context.authorization?.user_info?.sub;

if (!linkedInUserId) {
  throw new Error("User ID not found.");
}

// Prepare the payload data for the LinkedIn API
const message = "Hello, from Arcade.dev!";
const payload = {
  author: `urn:li:person:${linkedInUserId}`,
  lifecycleState: "PUBLISHED",
  specificContent: {
    "com.linkedin.ugc.ShareContent": {
      shareCommentary: { text: message },
      shareMediaCategory: "NONE",
    },
  },
  visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
};

const response = await fetch("https://api.linkedin.com/v2/ugcPosts", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();
console.log(data);
