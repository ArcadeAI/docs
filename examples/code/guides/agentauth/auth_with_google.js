import { Arcade } from "@arcadeai/arcadejs";
import { google } from "googleapis";

/*
 * In this example, we will use Arcade to authenticate with Google and
 * retrieve Gmail messages.
 *
 * Consider using the Arcade Gmail toolkit, which simplifies the process for
 * retrieving email messages even further!
 *
 * Below we are just showing how to use Arcade as an auth provider, if you need to directly get a token to use with Google.
 */

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

// Your app's internal ID for the user (an email, UUID, etc).
// It's used internally to identify your user in Arcade, not to identify with the Gmail service.
// Use your Arcade account email for testing:
const user_id = "{arcade_user_id}";

// Start the authorization process
let auth_response = await client.auth.start(user_id, "google", {
  scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
});

if (auth_response.status !== "completed") {
  console.log("Please complete the authorization challenge in your browser:");
  console.log(auth_response.url);
}

// Wait for the authorization to complete
auth_response = await client.auth.waitForCompletion(auth_response);

if (!auth_response.context.token) {
  throw new Error("No token found in auth response");
}

// Set up Google API client with the token
const auth = new google.auth.OAuth2();
auth.setCredentials({ access_token: auth_response.context.token });
const gmail = google.gmail({ version: "v1", auth });

// List email messages
const response = await gmail.users.messages.list({
  userId: "me",
});

const email_messages = response.data.messages || [];
console.log(email_messages);
