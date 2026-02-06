---
title: "Securing Arcade MCP Deployments"
description: "Arcade - AI platform for developers"
---
[Security & Compliance](/en/guides/security.md)
Securing Arcade MCP

# Securing Arcade MCP Deployments

You may have noticed that when you connected to the  server you created with `arcade-mcp`, you could immediately call your tools from local MCP Clients and , like Claude and Cursor. This is because the `arcade-mcp` server is _not_ secured by any mechanism by default. Most use-cases for  today are local development or local to a single machine, and we optimize for that use-case.

However, you can secure your  server in two ways: deploying it to Arcade or adding front-door OAuth.

## Arcade Deploy

When you `arcade deploy` your  server, it will be secured behind the Arcade platform.

Under the hood, we disable the  routes provided by `arcade-mcp`, and use the  as a gateway for your , which has a number of additional features. Arcade will create a randomized secure secret for your MCP server (via the `ARCADE_WORKER_SECRET` environment variable) so that your server is protected from unauthorized access, as well as being isolated from direct access from outside of the Arcade platform. Servers managed by Arcade (servers that are `arcade deploy`ed) serve `/worker` endpoints that are protected by this secret. The worker endpoints are `worker/health`, `/worker/tools`, and `/worker/tools/invoke`. The health endpoint is not protected by this secret, but the listing tools and  invocations are. You can explore this behavior locally by setting the same environment variable in your local environment.

Learn more about how to deploy your  server to Arcade [here](/guides/deployment-hosting/arcade-deploy.md).

## OAuth Resource Server Auth

You can secure your  server’s `/mcp` endpoints with OAuth 2.1 Resource Server auth. This turns your  into a protected resource, enabling you to use  with authorization and secrets over HTTP.

This approach is ideal when:

-   You want to host your  server yourself (local, on-premise, or third-party hosting)
-   You already have an OAuth 2.1 compliant Authorization Server (e.g., WorkOS AuthKit, Auth0, Descope)

Resource Server auth works alongside tool-level authorization. Resource Server auth secures access to the  server itself, while \-level auth enables your tools to access third-party APIs on behalf of the authenticated .

Learn more about adding front-door OAuth to your  server [here](/guides/security/secure-your-mcp-server.md).

### Client ID Metadata Documents (Coming soon)

Coming soon, you will be able to secure your  server using Client ID Metadata Documents (CIMD) for authorization. Learn more about how MCP integrates with OAuth [here](https://blog.modelcontextprotocol.io/posts/client_registration/) .

Last updated on February 6, 2026

[Overview](/en/guides/security.md)
[Secure your MCP server](/en/guides/security/secure-your-mcp-server.md)
