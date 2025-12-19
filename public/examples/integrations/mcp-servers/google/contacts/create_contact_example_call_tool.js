import { Arcade } from "@arcadeai/arcadejs";
// Required Google OAuth scopes:
// - https://www.googleapis.com/auth/contacts

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GoogleContacts.CreateContact";

// Start the authorization process
const authResponse = await client.tools.authorize({
  tool_name: TOOL_NAME,
  user_id: USER_ID,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  given_name: "John",
  family_name: "Doe",
  email: "john.doe@example.com",
  phone_number: "+1234567890"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(response);
