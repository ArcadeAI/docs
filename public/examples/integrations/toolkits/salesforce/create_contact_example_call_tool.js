import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "Salesforce.CreateContact";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  account_id: "001111111111111111",
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  phone: "1234567890",
  mobile_phone: "1234567890",
  title: "Director of Marketing",
  department: "Marketing",
  description: "John Doe is the Director of Marketing of Acme Inc.",
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
});

console.log(response.output.value);
