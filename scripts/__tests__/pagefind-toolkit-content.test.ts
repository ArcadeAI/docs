import { describe, expect, it } from "vitest";

import type {
  ToolkitData,
  ToolDefinition,
  ToolParameter,
} from "@/app/_components/toolkit-docs/types";
import { toolkitDataToSearchMarkdown } from "../pagefind-toolkit-content";

const makeTool = (
  qualifiedName: string,
  options?: {
    parameters?: ToolParameter[];
    auth?: ToolDefinition["auth"];
    secrets?: string[];
    secretsInfo?: ToolDefinition["secretsInfo"];
    output?: ToolDefinition["output"];
    codeExample?: ToolDefinition["codeExample"];
  }
): ToolDefinition => ({
  name: qualifiedName.split(".")[1] ?? qualifiedName,
  qualifiedName,
  fullyQualifiedName: `${qualifiedName}@1.0.0`,
  description: "Does something useful.",
  parameters: options?.parameters ?? [],
  auth: options?.auth ?? null,
  secrets: options?.secrets ?? [],
  secretsInfo: options?.secretsInfo,
  output: options?.output ?? null,
  documentationChunks: [],
  codeExample: options?.codeExample,
});

const makeToolkit = (
  tools: ToolDefinition[],
  options?: {
    auth?: ToolkitData["auth"];
    summary?: string;
    documentationChunks?: ToolkitData["documentationChunks"];
  }
): ToolkitData =>
  ({
    id: "Github",
    label: "GitHub",
    version: "1.0.0",
    description: "Arcade tools for GitHub.",
    metadata: {
      category: "development",
      iconUrl: "https://example.com/icon.svg",
      isBYOC: false,
      isPro: false,
      type: "arcade",
      docsLink: "https://docs.arcade.dev",
      isComingSoon: false,
      isHidden: false,
    },
    auth: options?.auth ?? null,
    tools,
    customImports: [],
    subPages: [],
    summary: options?.summary,
    documentationChunks: options?.documentationChunks,
  }) satisfies ToolkitData;

describe("toolkitDataToSearchMarkdown", () => {
  it("includes the toolkit title, version, description, and tool list", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([makeTool("Github.CreateIssue")])
    );

    expect(markdown).toContain("# GitHub");
    expect(markdown).toContain("**Version:** 1.0.0");
    expect(markdown).toContain("Arcade tools for GitHub.");
    expect(markdown).toContain("## Tools");
    expect(markdown).toContain("`Github.CreateIssue`");
    expect(markdown).toContain("Does something useful.");
  });

  it("truncates very large toolkits to keep the search index manageable", () => {
    const tools = Array.from({ length: 501 }, (_, index) =>
      makeTool(`Github.Tool${index}`)
    );

    const markdown = toolkitDataToSearchMarkdown(makeToolkit(tools));

    expect(markdown).toContain("*... and 1 more tools.*");
  });

  it("includes OAuth authentication details", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([makeTool("Github.CreateIssue")], {
        auth: {
          type: "oauth2",
          providerId: "github",
          allScopes: ["repo", "user:email"],
        },
      })
    );

    expect(markdown).toContain("## Authentication");
    expect(markdown).toContain("**Type:** OAuth 2.0");
    expect(markdown).toContain("**Provider:** github");
    expect(markdown).toContain("**Required scopes:**");
    expect(markdown).toContain("- `repo`");
    expect(markdown).toContain("- `user:email`");
  });

  it("includes overview summary when available", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([makeTool("Github.CreateIssue")], {
        summary: "This is a toolkit for managing GitHub resources.",
      })
    );

    expect(markdown).toContain("## Overview");
    expect(markdown).toContain(
      "This is a toolkit for managing GitHub resources."
    );
  });

  it("includes tool parameters with types, required flags, and descriptions", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([
        makeTool("Github.CreateIssue", {
          parameters: [
            {
              name: "repo",
              type: "string",
              required: true,
              description: "The repository name.",
              enum: null,
            },
            {
              name: "title",
              type: "string",
              required: true,
              description: "The issue title.",
              enum: null,
            },
            {
              name: "labels",
              type: "array",
              innerType: "string",
              required: false,
              description: "Labels to assign.",
              enum: null,
            },
          ],
        }),
      ])
    );

    expect(markdown).toContain("**Parameters:**");
    expect(markdown).toContain("- `repo`: `string` *(required)*");
    expect(markdown).toContain("  - The repository name.");
    expect(markdown).toContain("- `title`: `string` *(required)*");
    expect(markdown).toContain("- `labels`: `array[string]` *(optional)*");
    expect(markdown).toContain("  - Labels to assign.");
  });

  it("includes enum values for parameters", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([
        makeTool("Github.ListIssues", {
          parameters: [
            {
              name: "state",
              type: "string",
              required: false,
              description: "Filter by state.",
              enum: ["open", "closed", "all"],
            },
          ],
        }),
      ])
    );

    expect(markdown).toContain(
      "- Allowed values: `open`, `closed`, `all`"
    );
  });

  it("includes per-tool OAuth scopes", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([
        makeTool("Github.CreateIssue", {
          auth: {
            providerId: "github",
            providerType: "oauth2",
            scopes: ["repo", "write:issues"],
          },
        }),
      ])
    );

    expect(markdown).toContain("**OAuth Scopes:**");
    expect(markdown).toContain("- `repo`");
    expect(markdown).toContain("- `write:issues`");
  });

  it("includes required secrets with type classification", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([
        makeTool("Stripe.CreateCustomer", {
          secrets: ["STRIPE_SECRET_KEY"],
          secretsInfo: [{ name: "STRIPE_SECRET_KEY", type: "api_key" }],
        }),
      ])
    );

    expect(markdown).toContain("**Required Secrets:**");
    expect(markdown).toContain("- `STRIPE_SECRET_KEY` (api_key)");
  });

  it("includes output type and description", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([
        makeTool("Github.CreateIssue", {
          output: {
            type: "json",
            description: "The created issue object.",
          },
        }),
      ])
    );

    expect(markdown).toContain("**Output:** `json`");
    expect(markdown).toContain("- The created issue object.");
  });

  it("includes code examples as JSON with scopes and secrets", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([
        makeTool("Github.CreateIssue", {
          auth: {
            providerId: "github",
            providerType: "oauth2",
            scopes: ["repo", "write:issues"],
          },
          codeExample: {
            toolName: "Github.CreateIssue",
            parameters: {
              repo: { value: "my-repo", type: "string", required: true },
              title: { value: "Bug fix", type: "string", required: true },
            },
            requiresAuth: true,
            authProvider: "github",
          },
        }),
      ])
    );

    expect(markdown).toContain("**Example:**");
    expect(markdown).toContain("```json");
    expect(markdown).toContain('"tool": "Github.CreateIssue"');
    expect(markdown).toContain('"repo": "my-repo"');
    expect(markdown).toContain('"title": "Bug fix"');
    expect(markdown).toContain('"requires_auth": true');
    expect(markdown).toContain('"auth_provider": "github"');
    expect(markdown).toContain('"scopes"');
    expect(markdown).toContain('"repo"');
    expect(markdown).toContain('"write:issues"');
    expect(markdown).toContain("```");
  });

  it("includes secrets in code example JSON", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([
        makeTool("Stripe.CreateCustomer", {
          secrets: ["STRIPE_SECRET_KEY"],
          secretsInfo: [{ name: "STRIPE_SECRET_KEY", type: "api_key" }],
          codeExample: {
            toolName: "Stripe.CreateCustomer",
            parameters: {
              name: { value: "John Doe", type: "string", required: true },
            },
            requiresAuth: false,
          },
        }),
      ])
    );

    expect(markdown).toContain("**Example:**");
    expect(markdown).toContain('"secrets"');
    expect(markdown).toContain('"name": "STRIPE_SECRET_KEY"');
    expect(markdown).toContain('"type": "api_key"');
  });

  it("marks requires_auth when scopes exist, even if example flags false", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([
        makeTool("Github.CreateIssue", {
          auth: {
            providerId: "github",
            providerType: "oauth2",
            scopes: ["repo"],
          },
          codeExample: {
            toolName: "Github.CreateIssue",
            parameters: {
              repo: { value: "my-repo", type: "string", required: true },
            },
            requiresAuth: false,
          },
        }),
      ])
    );

    expect(markdown).toContain('"requires_auth": true');
    expect(markdown).toContain('"scopes"');
    expect(markdown).toContain('"repo"');
  });

  it("includes toolkit-level documentation chunks", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([makeTool("Stripe.CreateCustomer")], {
        documentationChunks: [
          {
            type: "markdown",
            location: "auth",
            position: "after",
            content:
              "## Auth\n\n**Required secret:** `STRIPE_SECRET_KEY`",
          },
        ],
      })
    );

    expect(markdown).toContain("## Auth");
    expect(markdown).toContain("**Required secret:** `STRIPE_SECRET_KEY`");
  });

  it("shows Parameters: None for tools without parameters", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([makeTool("Stripe.RetrieveBalance")])
    );

    expect(markdown).toContain("**Parameters:** None");
  });

  it("includes quick reference section with links", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([
        makeTool("Github.CreateIssue"),
        makeTool("Github.ListIssues"),
      ])
    );

    expect(markdown).toContain("### Quick Reference");
    expect(markdown).toContain(
      "- [`Github.CreateIssue`](#githubcreateissue)"
    );
    expect(markdown).toContain(
      "- [`Github.ListIssues`](#githublistissues)"
    );
  });

  it("includes Tool Details section", () => {
    const markdown = toolkitDataToSearchMarkdown(
      makeToolkit([makeTool("Github.CreateIssue")])
    );

    expect(markdown).toContain("## Tool Details");
    expect(markdown).toContain("### Github.CreateIssue");
  });
});

