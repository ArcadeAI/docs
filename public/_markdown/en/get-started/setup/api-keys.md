---
title: "Getting Your API Key"
description: "Learn how to obtain and manage your Arcade API key"
---
SetupGet an API key

# Getting Your API Key

Before you begin, you’ll need an Arcade  - if you haven’t created one yet, you can [sign up here](https://app.arcade.dev/register). Once you have an account, you can generate  through either the dashboard or CLI.

### Dashboard

### Using the Dashboard

### Navigate to API Keys page

Visit the [API Keys page](https://api.arcade.dev/dashboard/api-keys)  in Arcade Dashboard.

### Create a new API key

1.  Click the `Create API Key` button in the top right
2.  Enter a descriptive name to help identify your key
3.  Click `Create API Key` to generate your key

### Save your API key securely

1.  Copy your  immediately. It only shows once.
2.  Store it securely
3.  You can always generate new keys if needed

### CLI

### Using the CLI

### Install and login

1.  Install the Arcade CLI:

### uv

```bash
uv tool install arcade-mcp
```

This will install the Arcade CLI as a [uv tool](https://docs.astral.sh/uv/guides/tools/#installing-tools) , making it available system wide.

### pip

```bash
pip install arcade-mcp
```

2.  Start the login process:

```bash
arcade login
```

### Complete setup

The CLI will automatically:

-   Print your  to the console
-   Save your credentials to `~/.arcade/credentials.yaml`

API keys are administrator credentials. Anyone who has your  can make requests to Arcade as you. Always store your API keys in a safe place, such as system environment variables, and never commit them to version control, share them publicly, or use them in browser or frontend code.

## Next Steps

Once you have your , you can:

-   [Start using tools](/get-started/quickstarts/call-tool-agent.md)

-   [Create custom tools](/guides/create-tools/tool-basics/build-mcp-server.md)


Last updated on February 11, 2026

[About Arcade](/en/get-started/about-arcade.md)
[Connect Arcade docs to your IDE](/en/get-started/setup/connect-arcade-docs.md)
