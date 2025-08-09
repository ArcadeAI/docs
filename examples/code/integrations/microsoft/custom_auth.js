import { Arcade } from '@arcadeai/arcadejs';

const client = new Arcade();

const userId = '{arcade_user_id}';

// Start the authorization process
let authResponse = await client.auth.start(userId, 'microsoft', {
  scopes: ['User.Read', 'Files.Read'],
});

if (authResponse.status !== 'completed') {
  console.log('Please complete the authorization challenge in your browser:');
  console.log(authResponse.url);
}

// Wait for the authorization to complete
authResponse = await client.auth.waitForCompletion(authResponse);

const token = authResponse.context.token;
// TODO: Do something interesting with the token...
