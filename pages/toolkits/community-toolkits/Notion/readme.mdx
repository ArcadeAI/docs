# Arcade Notion

An Arcade AI toolkit designed to interact with Notion, enabling users to find and create pages and databases.

## Features

- **Page & Database Discovery**: Easily find pages and databases by their titles and get their IDs for follow-up operations
- **Content Creation**: Generate new pages and databases with AI-assisted content population
- **Secure OAuth Integration**: Built-in secure authentication flow with Notion's OAuth 2.0

## Roadmap

- [ ] Update existing pages and databases
- [ ] Delete pages and databases

## Prerequisites

Before getting started, ensure you have:

- A Notion account with administrative access
- Permission to create and manage integrations
- Access to target pages/databases

## Configuration

### 1. Create a Notion Integration

1. Follow the [Create a Public Integration](https://developers.notion.com/docs/authorization#public-integration-auth-flow-set-up) guide
2. Set the redirect URI to: `https://cloud.arcade-ai.com/api/v1/oauth/callback`
3. Save your client ID and secret

### 2. Environment Setup

Add these variables to your `arcade.env`:

```env
NOTION_CLIENT_ID=your_client_id
NOTION_CLIENT_SECRET=your_client_secret
```

### 3. OAuth Configuration

Add this configuration to your Arcade engine setup:

```yaml
auth:
  providers:
    - id: notion
      enabled: true
      type: oauth2
      description: "Notion OAuth 2.0 provider"
      client_id: ${env:NOTION_CLIENT_ID}
      client_secret: ${env:NOTION_CLIENT_SECRET}
      oauth2:
        authorize_request:
          endpoint: "https://api.notion.com/v1/oauth/authorize"
          params:
            response_type: "code"
            client_id: "{{client_id}}"
            redirect_uri: "{{redirect_uri}}"
            owner: "user"
        token_request:
          endpoint: "https://api.notion.com/v1/oauth/token"
          params:
            grant_type: "authorization_code"
            redirect_uri: "{{redirect_uri}}"
          auth_method: "client_secret_basic"
```

## Usage Examples

### Finding Resources

```plaintext
# Find a database
"Get me the database ID for 'Project Tracker'"

# Locate a specific page
"What's the ID of the page called 'Meeting Notes'?"
```

### Creating Content

```plaintext
# Create a new project page
"Create a new page titled 'Mobile App Redesign' in the 'Project Ideas' database and populate it with ideas generated from our recent discussion"


# Create meeting notes
"Create a new page titled 'Client Discussion' within the 'Meeting Notes' database, including all the notes from today's meeting"
```
