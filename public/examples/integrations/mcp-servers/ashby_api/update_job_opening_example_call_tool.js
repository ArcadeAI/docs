import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "AshbyApi.UpdateJobOpening";

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
  "department_team_id": "12345",
  "employment_type": "FullTime",
  "fields_to_update": "jobIds,targetHireDate",
  "is_backfill": true,
  "job_description_update": "We are looking for a skilled software engineer to join our team.",
  "opening_identifier": "job-67890",
  "target_hire_date": "2023-12-01",
  "target_start_date": "2024-01-15"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
