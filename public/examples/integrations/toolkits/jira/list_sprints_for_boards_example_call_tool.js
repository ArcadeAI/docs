import { Arcade } from '@arcadeai/arcadejs';

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = '{arcade_user_id}';
const TOOL_NAME = 'Jira.ListSprintsForBoards';

// Start the authorization process
const authResponse = await client.tools.authorize({ tool_name: TOOL_NAME });

if (authResponse.status !== 'completed') {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  board_identifiers_list: ['123', '456'],
  max_sprints_per_board: 10,
  state: 'active',
  start_date: '2023-01-01',
  end_date: '2023-12-31',
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
