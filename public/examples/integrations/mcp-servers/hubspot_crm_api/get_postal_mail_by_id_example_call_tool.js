import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "HubspotCrmApi.GetPostalMailById";

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
  "postal_mail_id": "12345",
  "identify_by_id_property": "mail_id",
  "include_archived": true,
  "properties_with_history": [
    "status",
    "delivery_date"
  ],
  "related_objects_associations": [
    "contact_1",
    "company_2"
  ],
  "specified_properties": [
    "subject",
    "sender"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
