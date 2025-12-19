import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "MailchimpMarketingApi.CreateMailchimpList";

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
  "mode": "execute",
  "request_body": "{\"name\":\"New List\",\"contact\":{\"company\":\"Company Name\",\"address1\":\"123 Main St\",\"city\":\"Anytown\",\"state\":\"CA\",\"zip\":\"12345\",\"country\":\"US\"},\"permission_reminder\":\"You are receiving this email because you signed up for updates.\",\"campaign_defaults\":{\"from_name\":\"Your Name\",\"from_email\":\"you@example.com\",\"subject\":\"Subject Line\",\"language\":\"en\"},\"email_type_option\":true}"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
