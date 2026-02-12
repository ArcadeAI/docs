---
title: "Overview"
description: "Learn about the different ways to host Arcade"
---
Deployment & hostingOverview

# Hosting Options Overview

The easiest and best way to use Arcade is via the Arcade Cloud service - sign up for free at [https://api.arcade.dev](https://api.arcade.dev) . However, you might need to connect your  to local resources (e.g. a local database or filesystem) or keep data within your own infrastructure. Don’t worry, Arcade has you covered via either Arcade Cloud or our on-premise deployment options.

## Arcade Cloud

Arcade Cloud is the default option — sign up and start building immediately:

-   **Zero Infrastructure**: No servers or databases to manage
-   **Automatic Updates**: Always access the latest  and features
-   **Built-in Scaling**: Handles traffic spikes automatically
-   **Free Tier**: Start building without a credit card

### MCP Server Deployment

You can route and manage tool calls from your agents to  servers hosted anywhere—on your machine, on your own infrastructure, in a private cloud, or on Arcade Cloud. This allows you to mix the best public  with your own private tools.

Connect on-premises  servers to Arcade Cloud for a hybrid deployment:

-   **Private Resources**: Access databases and APIs within your network
-   **Data Control**: Keep sensitive data in your environment
-   **Custom Dependencies**: Use specific runtime requirements or configurations
-   **Compliance**: Meet regulatory requirements while using Arcade’s capabilities

See [On-premise MCP Servers](/guides/deployment-hosting/on-prem.md) for more information about how to use your own  servers running anywhere, and see [Arcade Deploy](/guides/deployment-hosting/arcade-deploy.md) to learn how to deploy to Arcade Cloud.

### Customizing Auth

You don’t have to self-host Arcade to customize your auth experiences. Arcade Cloud supports a number of  out of the box, and you can provide your own OAuth app credentials to brand your end-user experience. We recommend doing this for all production use cases, so that you can have isolated rate limits with the OAuth service provider and you can give your users a consistent experience when they go through an auth flow. You can still use the same  when you customize your auth, no code changes are required.

See [Customizing Auth](/references/auth-providers.md) for more information.

### Arcade Cloud Pricing

Arcade Cloud offers a generous free tier to get started:

-   **Free Tier**: Includes access to all public  Servers and basic features
-   **Usage-Based**: Pay only for what you use as you scale

Visit [https://api.arcade.dev](https://api.arcade.dev)  for current pricing details.

## On-Premise Deployments

Fully on-premise deployments of the Arcade platform are available! Arcade can be deployed on Kubernetes via our Helm chart and Docker images as part of our enterprise offering. [Contact us to learn more](/resources/contact-us.md).

The requirements for deploying Arcade on-premise are:

-   Kubernetes cluster (1.30+) (We have tested this helm chart on AKS, GKE, and EKS).
-   Helm 3.x
-   kubectl configured to access your cluster
-   Cert Manager for securing Redis and Postgres and public ingress (see below)
-   Nginx Ingress for accessing Arcade.dev from outside the cluster (see below)

Last updated on February 12, 2026

[Secure Auth in Production](/en/guides/user-facing-agents/secure-auth-production.md)
[Arcade Cloud](/en/guides/deployment-hosting/arcade-cloud.md)
