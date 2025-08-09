import { Arcade } from '@arcadeai/arcadejs';

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = '{arcade_user_id}';
const TOOL_NAME = 'Microsoft.ListEventsInTimeRange';

// Start the authorization process
const authResponse = await client.tools.authorize({
  tool_name: TOOL_NAME,
  user_id: USER_ID,
});

if (authResponse.status !== 'completed') {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  start_date_time: '2025-04-28T00:00:00',
  end_date_time: '2025-04-29T00:00:00',
  limit: 10,
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(response);
