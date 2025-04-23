import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade({ baseURL: "https://api.arcade.dev" }); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "user@example.com";
const TOOL_NAME = "Hubspot.GetCompanyDetails";

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
  company_id: "1234567890",
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(response.output.value);
