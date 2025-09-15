import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Hubspot.CreateEmailActivity";

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
  "subject": "Quarterly update and next steps",
  "when_occurred": "2025-09-12T10:30:00",
  "from_email": "alice@example.com",
  "to_email": "bob@acme.com",
  "body_text": "Hi Bob,\n\nPlease find the quarterly update attached. Let me know if you have questions.\n\nBest,\nAlice",
  "body_html": "<p>Hi Bob,</p><p>Please find the quarterly update attached. Let me know if you have questions.</p><p>Best,<br>Alice</p>",
  "from_first_name": "Alice",
  "from_last_name": "Johnson",
  "to_first_name": "Bob",
  "to_last_name": "Smith",
  "cc_emails": [
    "carol@example.com"
  ],
  "bcc_emails": [
    "audit@example.com"
  ],
  "direction": "EMAIL",
  "status": "SENT",
  "associate_to_contact_id": 12345,
  "associate_to_company_id": 6789
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
