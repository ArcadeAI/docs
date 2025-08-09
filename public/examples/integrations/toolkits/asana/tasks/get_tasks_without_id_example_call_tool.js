import { Arcade } from '@arcadeai/arcadejs';

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = 'Asana.SearchTasks';

// Start the authorization process
const authResponse = await client.tools.authorize({ tool_name: TOOL_NAME });

if (authResponse.status !== 'completed') {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  keywords: 'My Task',
  workspace_id: '1234567890',
  assignee_id: '1234567890',
  project: '1234567890',
  team_id: '1234567890',
  tags: ['My Tag', 'Another Tag', '1234567890'],
  due_on_or_before: '2025-01-30',
  start_on_or_after: '2025-01-01',
  completed: false,
  limit: 100,
  sort_by: 'modified_at',
  sort_order: 'descending',
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
});

console.log(JSON.stringify(response.output.value, null, 2));
