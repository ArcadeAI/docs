import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "MailchimpMarketingApi.UpdateMailchimpListSettings";

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
  "mailchimp_list_id": "123456",
  "request_body": "{\"name\":\"Updated List Name\",\"contact\":{\"company\":\"New Company\",\"address1\":\"123 New St\"},\"permission_reminder\":\"You signed up for updates.\",\"campaign_defaults\":{\"from_name\":\"New Name\",\"from_email\":\"newemail@example.com\",\"subject\":\"New Subject\",\"language\":\"en\"}}"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
