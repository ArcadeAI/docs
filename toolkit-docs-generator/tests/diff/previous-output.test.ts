import { describe, expect, it } from "vitest";

import { parsePreviousToolkitForDiff } from "../../src/diff/previous-output";
import type { MergedToolkit } from "../../src/types/index";

const createValidToolkit = (): MergedToolkit => ({
  auth: null,
  customImports: [],
  description: "GitHub toolkit",
  documentationChunks: [],
  generatedAt: "2026-01-01T00:00:00.000Z",
  id: "Github",
  label: "GitHub",
  metadata: {
    category: "development",
    docsLink: "https://docs.example.com/github",
    iconUrl: "https://example.com/github.svg",
    isBYOC: false,
    isComingSoon: false,
    isHidden: false,
    isPro: false,
    type: "arcade",
  },
  subPages: [],
  tools: [
    {
      auth: null,
      description: null,
      documentationChunks: [],
      fullyQualifiedName: "Github.CreateIssue@1.0.0",
      name: "CreateIssue",
      output: {
        description: null,
        type: "json",
      },
      parameters: [
        {
          description: "Issue title",
          enum: null,
          inferrable: true,
          name: "title",
          required: true,
          type: "string",
        },
      ],
      qualifiedName: "Github.CreateIssue",
      secrets: [],
      secretsInfo: [],
    },
  ],
  version: "1.0.0",
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
        auth: null,
        customImports: [{ component: "JiraOverview" }],
        description: "Jira toolkit",
        documentationChunks: [
          {
            heading: "How to use Jira",
          },
        ],
        id: "Jira",
        label: "Jira",
        metadata: {
          category: "development",
          docsLink: "https://docs.example.com/jira",
          iconUrl: "https://example.com/jira.svg",
          isBYOC: false,
          isComingSoon: false,
          isHidden: false,
          isPro: false,
          type: "arcade",
        },
        subPages: [{ slug: "advanced" }],
        tools: [
          {
            auth: {
              provider_id: null,
              provider_type: "oauth2",
              scopes: ["write:jira-work"],
            },
            description: null,
            fullyQualifiedName: "Jira.CreateIssue@2.4.0",
            name: "CreateIssue",
            output: {
              value_schema: {
                val_type: "json",
              },
            },
            parameters: [
              {
                description: "Issue title",
                enum: null,
                name: "title",
                required: true,
                type: "string",
              },
            ],
            qualifiedName: "Jira.CreateIssue",
            secrets: [],
          },
        ],
        version: "2.4.0",
      },
      "jira"
    );

    expect(result.usedFallback).toBe(true);
    expect(result.toolkit?.id).toBe("Jira");
    expect(result.toolkit?.tools).toHaveLength(1);
    expect(result.toolkit?.tools[0]?.output).toEqual({
      description: null,
      type: "json",
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
        auth: null,
        customImports: ['import { Callout } from "nextra/components";'],
        description: "GitHub toolkit",
        documentationChunks: [
          {
            content: "Critical: GitHub Apps only, not OAuth Apps.",
            location: "description",
            position: "after",
            type: "warning",
          },
          {
            content: "## GitHub Enterprise Support",
            header: "## GitHub Enterprise Support",
            location: "before_available_tools",
            position: "after",
            type: "info",
          },
        ],
        id: "Github",
        label: "GitHub",
        metadata: {
          category: "development",
          docsLink: "https://docs.example.com/github",
          iconUrl: "https://example.com/github.svg",
          isBYOC: false,
          isComingSoon: false,
          isHidden: false,
          isPro: false,
          type: "arcade",
        },
        subPages: [],
        tools: [
          {
            auth: null,
            description: null,
            fullyQualifiedName: "Github.CreateIssue@3.0.0",
            name: "CreateIssue",
            // Legacy field that causes strict parse to fail
            output: { value_schema: { val_type: "json" } },
            parameters: [],
            qualifiedName: "Github.CreateIssue",
            secrets: [],
          },
        ],
        version: "3.0.0",
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
        auth: null,
        customImports: [],
        description: null,
        documentationChunks: [
          {
            content: "Zoom requires admin approval.",
            location: "header",
            position: "after",
            type: "info",
          },
        ],
        id: "Zoom",
        label: "Zoom",
        metadata: {
          category: "productivity",
          docsLink: "https://docs.example.com/zoom",
          iconUrl: "https://example.com/zoom.svg",
          isBYOC: false,
          isComingSoon: false,
          isHidden: false,
          isPro: false,
          type: "arcade",
        },
        subPages: ["environment-setup", "rate-limits"],
        tools: [
          {
            auth: null,
            // Missing fullyQualifiedName — causes strict parse to fail
            description: null,
            name: "CreateMeeting",
            output: null,
            parameters: [],
            qualifiedName: "Zoom.CreateMeeting",
            secrets: [],
          },
        ],
        version: "1.0.0",
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
        auth: null,
        description: null,
        id: "Notion",
        label: "Notion",
        metadata: {
          category: "productivity",
          docsLink: "https://docs.example.com/notion",
          iconUrl: "https://example.com/notion.svg",
          isBYOC: false,
          isComingSoon: false,
          isHidden: false,
          isPro: false,
          type: "arcade",
        },
        tools: [
          {
            auth: null,
            description: null,
            name: "CreatePage",
            output: null,
            parameters: [],
            secrets: [],
          },
        ],
        version: "3.0.0",
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
