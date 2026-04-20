import { describe, expect, it } from "vitest";

import { parsePreviousToolkitForDiff } from "../../src/diff/previous-output.js";
import type { MergedToolkit } from "../../src/types/index.js";

const createValidToolkit = (): MergedToolkit => ({
  id: "Github",
  label: "GitHub",
  version: "1.0.0",
  description: "GitHub toolkit",
  metadata: {
    category: "development",
    iconUrl: "https://example.com/github.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "https://docs.example.com/github",
    isComingSoon: false,
    isHidden: false,
  },
  auth: null,
  tools: [
    {
      name: "CreateIssue",
      qualifiedName: "Github.CreateIssue",
      fullyQualifiedName: "Github.CreateIssue@1.0.0",
      description: null,
      toolkitDescription: null,
      parameters: [
        {
          name: "title",
          type: "string",
          required: true,
          description: "Issue title",
          enum: null,
          inferrable: true,
        },
      ],
      auth: null,
      secrets: [],
      output: {
        type: "json",
        description: null,
      },
      secretsInfo: [],
      documentationChunks: [],
    },
  ],
  documentationChunks: [],
  customImports: [],
  subPages: [],
  generatedAt: "2026-01-01T00:00:00.000Z",
});

describe("parsePreviousToolkitForDiff", () => {
  it("uses strict parsing when previous output already matches schema", () => {
    const result = parsePreviousToolkitForDiff(createValidToolkit(), "github");

    expect(result.usedFallback).toBe(false);
    expect(result.toolkit?.id).toBe("Github");
    expect(result.toolkit?.tools).toHaveLength(1);
  });

  it("falls back for legacy page fields and preserves tool signature fields", () => {
    const result = parsePreviousToolkitForDiff(
      {
        id: "Jira",
        label: "Jira",
        version: "2.4.0",
        description: "Jira toolkit",
        metadata: {
          category: "development",
          iconUrl: "https://example.com/jira.svg",
          isBYOC: false,
          isPro: false,
          type: "arcade",
          docsLink: "https://docs.example.com/jira",
          isComingSoon: false,
          isHidden: false,
        },
        auth: null,
        tools: [
          {
            name: "CreateIssue",
            qualifiedName: "Jira.CreateIssue",
            fullyQualifiedName: "Jira.CreateIssue@2.4.0",
            description: null,
            parameters: [
              {
                name: "title",
                type: "string",
                required: true,
                description: "Issue title",
                enum: null,
              },
            ],
            auth: {
              provider_type: "oauth2",
              provider_id: null,
              scopes: ["write:jira-work"],
            },
            secrets: [],
            output: {
              value_schema: {
                val_type: "json",
              },
            },
          },
        ],
        documentationChunks: [
          {
            heading: "How to use Jira",
          },
        ],
        customImports: [{ component: "JiraOverview" }],
        subPages: [{ slug: "advanced" }],
      },
      "jira"
    );

    expect(result.usedFallback).toBe(true);
    expect(result.toolkit?.id).toBe("Jira");
    expect(result.toolkit?.tools).toHaveLength(1);
    expect(result.toolkit?.tools[0]?.output).toEqual({
      type: "json",
      description: null,
    });
    expect(result.toolkit?.tools[0]?.parameters[0]?.inferrable).toBe(true);
    expect(result.toolkit?.tools[0]?.auth).toEqual({
      providerId: null,
      providerType: "oauth2",
      scopes: ["write:jira-work"],
    });
  });

  it("preserves documentationChunks, customImports, and subPages on schema fallback", () => {
    // Simulates the regression: a toolkit file whose documentationChunks use
    // location/type values that pass Zod strict-parse (e.g. "description"/"warning"),
    // but the surrounding toolkit object has a legacy field that fails strict parse.
    const result = parsePreviousToolkitForDiff(
      {
        id: "Github",
        label: "GitHub",
        version: "3.0.0",
        description: "GitHub toolkit",
        metadata: {
          category: "development",
          iconUrl: "https://example.com/github.svg",
          isBYOC: false,
          isPro: false,
          type: "arcade",
          docsLink: "https://docs.example.com/github",
          isComingSoon: false,
          isHidden: false,
        },
        auth: null,
        tools: [
          {
            name: "CreateIssue",
            qualifiedName: "Github.CreateIssue",
            fullyQualifiedName: "Github.CreateIssue@3.0.0",
            description: null,
            parameters: [],
            auth: null,
            secrets: [],
            // Legacy field that causes strict parse to fail
            output: { value_schema: { val_type: "json" } },
          },
        ],
        documentationChunks: [
          {
            type: "warning",
            location: "description",
            position: "after",
            content: "Critical: GitHub Apps only, not OAuth Apps.",
          },
          {
            type: "info",
            location: "before_available_tools",
            position: "after",
            content: "## GitHub Enterprise Support",
            header: "## GitHub Enterprise Support",
          },
        ],
        customImports: ['import { Callout } from "nextra/components";'],
        subPages: [],
      },
      "github"
    );

    expect(result.usedFallback).toBe(true);
    expect(result.toolkit?.documentationChunks).toHaveLength(2);
    expect(result.toolkit?.documentationChunks[0]?.content).toBe(
      "Critical: GitHub Apps only, not OAuth Apps."
    );
    expect(result.toolkit?.documentationChunks[1]?.location).toBe(
      "before_available_tools"
    );
    expect(result.toolkit?.customImports).toHaveLength(1);
    expect(result.toolkit?.customImports[0]).toBe(
      'import { Callout } from "nextra/components";'
    );
    expect(result.toolkit?.subPages).toHaveLength(0);
  });

  it("preserves subPages on schema fallback", () => {
    const result = parsePreviousToolkitForDiff(
      {
        id: "Zoom",
        label: "Zoom",
        version: "1.0.0",
        description: null,
        metadata: {
          category: "productivity",
          iconUrl: "https://example.com/zoom.svg",
          isBYOC: false,
          isPro: false,
          type: "arcade",
          docsLink: "https://docs.example.com/zoom",
          isComingSoon: false,
          isHidden: false,
        },
        auth: null,
        tools: [
          {
            name: "CreateMeeting",
            qualifiedName: "Zoom.CreateMeeting",
            // Missing fullyQualifiedName — causes strict parse to fail
            description: null,
            parameters: [],
            auth: null,
            secrets: [],
            output: null,
          },
        ],
        documentationChunks: [
          {
            type: "info",
            location: "header",
            position: "after",
            content: "Zoom requires admin approval.",
          },
        ],
        customImports: [],
        subPages: ["environment-setup", "rate-limits"],
      },
      "zoom"
    );

    expect(result.usedFallback).toBe(true);
    expect(result.toolkit?.documentationChunks).toHaveLength(1);
    expect(result.toolkit?.subPages).toEqual([
      "environment-setup",
      "rate-limits",
    ]);
    expect(result.toolkit?.customImports).toHaveLength(0);
  });

  it("derives missing qualified names from toolkit and tool names", () => {
    const result = parsePreviousToolkitForDiff(
      {
        id: "Notion",
        label: "Notion",
        version: "3.0.0",
        description: null,
        metadata: {
          category: "productivity",
          iconUrl: "https://example.com/notion.svg",
          isBYOC: false,
          isPro: false,
          type: "arcade",
          docsLink: "https://docs.example.com/notion",
          isComingSoon: false,
          isHidden: false,
        },
        auth: null,
        tools: [
          {
            name: "CreatePage",
            description: null,
            parameters: [],
            auth: null,
            secrets: [],
            output: null,
          },
        ],
      },
      "notion"
    );

    expect(result.usedFallback).toBe(true);
    expect(result.toolkit?.tools).toHaveLength(1);
    expect(result.toolkit?.tools[0]?.qualifiedName).toBe("Notion.CreatePage");
    expect(result.toolkit?.tools[0]?.fullyQualifiedName).toBe(
      "Notion.CreatePage@3.0.0"
    );
  });

  it("returns null for non-object payloads", () => {
    const result = parsePreviousToolkitForDiff("invalid-payload", "github");

    expect(result.usedFallback).toBe(true);
    expect(result.toolkit).toBeNull();
    expect(result.reason).toContain("not a JSON object");
  });
});
