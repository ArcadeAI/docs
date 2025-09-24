import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Hubspot.CreateCallActivity";

// Start the authorization process
const authResponse = await client.tools.authorize({
    tool_name: TOOL_NAME,
    user_id: USER_ID
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "title": "Intro call with Acme",
  "when_occurred": "2025-09-12T10:30:00",
  "direction": "OUTBOUND",
  "summary": "Discussed project scope and next steps; agreed to send proposal.",
  "duration": 900,
  "to_number": "+14155550123",
  "from_number": "+14155550987",
  "associate_to_contact_id": 7854,
  "associate_to_company_id": 120
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
