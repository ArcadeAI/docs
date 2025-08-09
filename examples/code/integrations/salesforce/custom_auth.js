import { Arcade } from '@arcadeai/arcadejs';

const client = new Arcade((baseURL = 'http://localhost:9099')); // Automatically finds the `ARCADE_API_KEY` env variable

const salesforceProviderId = 'salesforce';
const salesforceOrgSubdomain = 'salesforce-org-subdomain';
const userId = '{arcade_user_id}';
const scopes = ['read_account'];

// Start the authorization process
let authResponse = await client.auth.start(userId, {
  provider: salesforceProviderId,
  scopes,
});

if (authResponse.status !== 'completed') {
  console.log('Please complete the authorization challenge in your browser:');
  console.log(authResponse.url);
}

// Wait for the authorization to complete
authResponse = await client.auth.waitForCompletion(authResponse);

if (!authResponse.context.token) {
  throw new Error('No token found in auth response');
}

const token = authResponse.context.token;

if (!token) {
  throw new Error('No token found in auth response');
}

// Use the Salesforce API
const response = await fetch(
  `https://${salesforceOrgSubdomain}.my.salesforce.com/services/data/v63.0/parameterizedSearch`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({
      q: 'acme',
      sobjects: [
        { name: 'Account', fields: ['Id', 'Name', 'Website', 'Phone'] },
      ],
      in: 'ALL',
      overallLimit: 10,
      offset: 0,
    }),
  }
);

if (!response.ok) {
  throw new Error(
    `HTTP error! status: ${response.status} - ${await response.text()}`
  );
}

console.log(await response.json());
