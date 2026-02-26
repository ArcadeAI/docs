import { describe, expect, it } from "vitest";
import {
  getToolkitSlug,
  normalizeToolkitId,
  type ToolkitSlugSource,
  toKebabCase,
} from "../../../app/_lib/toolkit-slug";

// ============================================================================
// normalizeToolkitId
// ============================================================================

describe("normalizeToolkitId", () => {
  it("lowercases and strips non-alphanumeric characters", () => {
    expect(normalizeToolkitId("GithubApi")).toBe("githubapi");
    expect(normalizeToolkitId("GitHub API")).toBe("githubapi");
    expect(normalizeToolkitId("Google Calendar")).toBe("googlecalendar");
  });

  it("removes hyphens and underscores", () => {
    expect(normalizeToolkitId("hubspot-conversations-api")).toBe(
      "hubspotconversationsapi"
    );
    expect(normalizeToolkitId("stripe_api")).toBe("stripeapi");
  });

  it("handles already-normalized input", () => {
    expect(normalizeToolkitId("gmail")).toBe("gmail");
    expect(normalizeToolkitId("posthogapi")).toBe("posthogapi");
  });

  it("returns empty string for special-character-only input", () => {
    expect(normalizeToolkitId("---")).toBe("");
    expect(normalizeToolkitId("   ")).toBe("");
    expect(normalizeToolkitId("!@#$%")).toBe("");
  });

  it("handles empty string", () => {
    expect(normalizeToolkitId("")).toBe("");
  });
});

// ============================================================================
// toKebabCase
// ============================================================================

describe("toKebabCase", () => {
  it("converts PascalCase to kebab-case", () => {
    expect(toKebabCase("PosthogApi")).toBe("posthog-api");
    expect(toKebabCase("GoogleCalendar")).toBe("google-calendar");
    expect(toKebabCase("HubspotCrmApi")).toBe("hubspot-crm-api");
  });

  it("handles single-word IDs", () => {
    expect(toKebabCase("Gmail")).toBe("gmail");
    expect(toKebabCase("Slack")).toBe("slack");
  });

  it("handles IDs with digits", () => {
    expect(toKebabCase("E2b")).toBe("e2b");
    expect(toKebabCase("Test2")).toBe("test2");
  });

  it("handles already-lowercase input", () => {
    expect(toKebabCase("gmail")).toBe("gmail");
    expect(toKebabCase("posthogapi")).toBe("posthogapi");
  });
});

// ============================================================================
// getToolkitSlug
// ============================================================================

describe("getToolkitSlug", () => {
  it("extracts slug from a full docsLink URL", () => {
    const source: ToolkitSlugSource = {
      id: "PosthogApi",
      docsLink:
        "https://docs.arcade.dev/en/mcp-servers/development/posthog-api",
    };
    expect(getToolkitSlug(source)).toBe("posthog-api");
  });

  it("extracts slug preserving hyphens from docsLink", () => {
    const source: ToolkitSlugSource = {
      id: "HubspotConversationsApi",
      docsLink:
        "https://docs.arcade.dev/en/mcp-servers/sales/hubspot-conversations-api",
    };
    expect(getToolkitSlug(source)).toBe("hubspot-conversations-api");
  });

  it("extracts slug preserving underscores from docsLink", () => {
    const source: ToolkitSlugSource = {
      id: "StripeApi",
      docsLink: "https://docs.arcade.dev/en/mcp-servers/payments/stripe_api",
    };
    expect(getToolkitSlug(source)).toBe("stripe_api");
  });

  it("falls back to kebab-case ID when docsLink is null", () => {
    const source: ToolkitSlugSource = {
      id: "PosthogApi",
      docsLink: null,
    };
    expect(getToolkitSlug(source)).toBe("posthog-api");
  });

  it("falls back to kebab-case ID when docsLink is undefined", () => {
    const source: ToolkitSlugSource = {
      id: "PosthogApi",
    };
    expect(getToolkitSlug(source)).toBe("posthog-api");
  });

  it("falls back to kebab-case ID when docsLink is empty string", () => {
    const source: ToolkitSlugSource = {
      id: "PosthogApi",
      docsLink: "",
    };
    expect(getToolkitSlug(source)).toBe("posthog-api");
  });

  it("handles docsLink as a relative path (not a URL)", () => {
    const source: ToolkitSlugSource = {
      id: "GoogleCalendar",
      docsLink: "/en/mcp-servers/productivity/google-calendar",
    };
    expect(getToolkitSlug(source)).toBe("google-calendar");
  });

  it("handles docsLink with trailing slash", () => {
    const source: ToolkitSlugSource = {
      id: "Gmail",
      docsLink: "https://docs.arcade.dev/en/mcp-servers/productivity/gmail/",
    };
    // Trailing slash creates empty last segment; extractSlugFromPath filters it
    expect(getToolkitSlug(source)).toBe("gmail");
  });

  it("handles simple single-segment docsLink", () => {
    const source: ToolkitSlugSource = {
      id: "Gmail",
      docsLink: "gmail",
    };
    expect(getToolkitSlug(source)).toBe("gmail");
  });

  it("converts mixed-case IDs to kebab-case in fallback", () => {
    const source: ToolkitSlugSource = {
      id: "GoogleDrive",
      docsLink: null,
    };
    expect(getToolkitSlug(source)).toBe("google-drive");
  });

  it("handles docsLink with only a domain (no path)", () => {
    const source: ToolkitSlugSource = {
      id: "Slack",
      docsLink: "https://docs.arcade.dev",
    };
    // No path segments → falls back to normalizeToolkitId
    expect(getToolkitSlug(source)).toBe("slack");
  });

  it("handles docsLink with domain and trailing slash only", () => {
    const source: ToolkitSlugSource = {
      id: "Slack",
      docsLink: "https://docs.arcade.dev/",
    };
    expect(getToolkitSlug(source)).toBe("slack");
  });
});
