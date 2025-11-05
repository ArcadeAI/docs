import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GithubApi.UpdateGithubProfile";

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
  "is_hireable": true,
  "new_blog_url": "https://myblog.com",
  "new_company_name": "Tech Innovations",
  "new_location": "San Francisco, CA",
  "new_twitter_username": "mytwitterhandle",
  "new_user_biography": "Software engineer with a passion for open source.",
  "new_user_name": "John Doe",
  "public_visible_email_address": "john.doe@example.com"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
