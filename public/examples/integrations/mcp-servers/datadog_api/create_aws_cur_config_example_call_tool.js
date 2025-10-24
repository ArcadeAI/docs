import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "DatadogApi.CreateAwsCurConfig";

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
  "aws_account_id": "123456789012",
  "aws_bucket_name_for_cur": "my-cost-reports-bucket",
  "aws_cur_config_type": "aws_cur_config_post_request",
  "bucket_region": "us-east-1",
  "include_new_member_accounts": true,
  "report_month": 10,
  "report_name": "MonthlyCostReport",
  "report_prefix": "cost-report-"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
