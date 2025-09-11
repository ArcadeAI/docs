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
  "subject": "Quarterly Partnership Update",
  "when_occurred": "2025-09-10T14:30:00",
  "from_email": "alex.sender@example.com",
  "to_email": "jordan.partner@example.com",
  "body_text": "Hi Jordan,\n\nPlease find the Q3 partnership summary attached.\n\nBest,\nAlex",
  "body_html": "<p>Hi Jordan,</p><p>Please find the Q3 partnership summary attached.</p><p>Best,<br>Alex</p>",
  "from_first_name": "Alex",
  "from_last_name": "Sender",
  "to_first_name": "Jordan",
  "to_last_name": "Partner",
  "cc_emails": [
    "pm@example.com"
  ],
  "bcc_emails": [
    "archive@example.com"
  ],
  "direction": "EMAIL",
  "status": "SENT",
  "associate_to_contact_id": 742,
  "associate_to_company_id": 58
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
