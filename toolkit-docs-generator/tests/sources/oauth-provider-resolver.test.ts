/**
 * Tests for OAuth Provider ID Resolver
 *
 * Validates the resolution strategy:
 * 1. Exact match
 * 2. Strip "api" suffix
 * 3. Longest-prefix match (with minimum length guard)
 */
import { describe, expect, it } from "vitest";
import {
  buildProviderIdResolver,
  normalizeLookup,
} from "../../src/sources/oauth-provider-resolver.js";

// ============================================================================
// Fixtures
// ============================================================================

/** Realistic set of known provider IDs (matches design system catalogue) */
const KNOWN_PROVIDERS = new Set([
  "airtable",
  "github",
  "google",
  "hubspot",
  "salesforce",
  "slack",
  "ticktick",
  "x",
  "zendesk",
  "zoho",
  "squareup",
]);

// ============================================================================
// normalizeLookup
// ============================================================================

describe("normalizeLookup", () => {
  it("lowercases and strips non-alphanumeric characters", () => {
    expect(normalizeLookup("HubSpot")).toBe("hubspot");
    expect(normalizeLookup("GitHub-Api")).toBe("githubapi");
    expect(normalizeLookup("Tick_Tick_API")).toBe("ticktickapi");
    expect(normalizeLookup("SALESFORCE")).toBe("salesforce");
  });

  it("handles already-normalized input", () => {
    expect(normalizeLookup("salesforce")).toBe("salesforce");
  });
});

// ============================================================================
// buildProviderIdResolver
// ============================================================================

describe("buildProviderIdResolver", () => {
  const resolve = buildProviderIdResolver(KNOWN_PROVIDERS);

  // ---------- 1. Exact match ----------

  describe("exact match", () => {
    it("resolves toolkit IDs that match a provider ID directly", () => {
      expect(resolve("Salesforce")).toBe("salesforce");
      expect(resolve("Zendesk")).toBe("zendesk");
      expect(resolve("Hubspot")).toBe("hubspot");
      expect(resolve("Github")).toBe("github");
    });

    it("is case-insensitive", () => {
      expect(resolve("SALESFORCE")).toBe("salesforce");
      expect(resolve("salesforce")).toBe("salesforce");
    });
  });

  // ---------- 2. Strip "api" suffix ----------

  describe("strip api suffix", () => {
    it("resolves *Api toolkit IDs by stripping the suffix", () => {
      expect(resolve("TicktickApi")).toBe("ticktick");
      expect(resolve("AirtableApi")).toBe("airtable");
      expect(resolve("ZohoApi")).toBe("zoho");
    });

    it("handles mixed casing of Api suffix", () => {
      expect(resolve("SlackAPI")).toBe("slack");
      expect(resolve("GithubApi")).toBe("github");
    });
  });

  // ---------- 3. Longest-prefix match ----------

  describe("longest-prefix match", () => {
    it("resolves HubSpot sub-toolkit IDs to hubspot", () => {
      expect(resolve("HubspotCrmApi")).toBe("hubspot");
      expect(resolve("HubspotMarketingApi")).toBe("hubspot");
      expect(resolve("HubspotAutomationApi")).toBe("hubspot");
      expect(resolve("HubspotConversationsApi")).toBe("hubspot");
    });

    it("picks the longest matching prefix", () => {
      // Add a more specific provider to test longest-prefix
      const providers = new Set(["hub", "hubspot"]);
      const resolveCustom = buildProviderIdResolver(providers);
      expect(resolveCustom("HubspotCrmApi")).toBe("hubspot");
    });
  });

  // ---------- 4. Minimum prefix length guard ----------

  describe("minimum prefix length", () => {
    it("does NOT match short provider IDs as prefixes", () => {
      // "xero" should NOT resolve to "x" (X/Twitter)
      expect(resolve("XeroApi")).toBeNull();
    });

    it("exact match still works for short IDs", () => {
      // "X" as an exact toolkit ID should resolve to "x"
      expect(resolve("X")).toBe("x");
    });

    it("strip-api still works for short IDs", () => {
      // This would need "x" + "api" = "xapi" which isn't a real case,
      // but tests the direct strip path
      const providers = new Set(["ab"]);
      const resolveCustom = buildProviderIdResolver(providers);
      expect(resolveCustom("AbApi")).toBe("ab");
    });
  });

  // ---------- 5. No match ----------

  describe("no match", () => {
    it("returns null for unknown toolkit IDs", () => {
      expect(resolve("UnknownToolkit")).toBeNull();
      expect(resolve("RandomApi")).toBeNull();
    });

    it("returns null for empty string", () => {
      expect(resolve("")).toBeNull();
    });
  });

  // ---------- Edge cases ----------

  describe("edge cases", () => {
    it("handles toolkit ID that equals provider ID + api exactly", () => {
      expect(resolve("GithubApi")).toBe("github");
    });

    it("handles providers set with no entries", () => {
      const empty = buildProviderIdResolver(new Set());
      expect(empty("Salesforce")).toBeNull();
    });

    it("does not match when base is exactly the provider ID (strip path)", () => {
      // "salesforceapi" -> base "salesforce" -> exact match in known set
      expect(resolve("SalesforceApi")).toBe("salesforce");
    });
  });
});
