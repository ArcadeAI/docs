import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "Hubspot.CreateContact";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  company_id: "1234567890",
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  phone: "+1234567890",
  mobile_phone: "+1234567890",
  job_title: "Software Engineer",
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
});

console.log(response.output.value);
