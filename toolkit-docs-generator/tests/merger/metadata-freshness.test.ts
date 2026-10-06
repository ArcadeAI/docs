/**
 * Tests for the Metadata Freshness Check module.
 *
 * Validates detection of design system metadata drifts between
 * previously generated toolkits and the current design system state.
 */
import { describe, expect, it } from "vitest";
import {
  detectMetadataChanges,
  formatFreshnessWarnings,
  type MetadataFreshnessResult,
} from "../../src/merger/metadata-freshness";
import type {
  MergedToolkit,
  MergedToolkitMetadata,
} from "../../src/types/index";

// ============================================================================
// Fixtures
// ============================================================================

const createMetadata = (
  overrides: Partial<MergedToolkitMetadata> = {}
): MergedToolkitMetadata => ({
  category: "development",
  docsLink: "https://docs.arcade.dev/en/mcp-servers/development/github",
  iconUrl: "https://design-system.arcade.dev/icons/github.svg",
  isBYOC: false,
  isComingSoon: false,
  isHidden: false,
  isPro: false,
  type: "arcade",
  ...overrides,
});

const createPreviousToolkit = (
  overrides: Omit<Partial<MergedToolkit>, "metadata"> & {
    metadata?: Partial<MergedToolkitMetadata>;
    label?: string;
  } = {}
): MergedToolkit => {
  const { metadata: metaOverrides, ...rest } = overrides;
  return {
    auth: null,
    customImports: [],
    description: "Test toolkit",
    documentationChunks: [],
    generatedAt: new Date().toISOString(),
    id: "Github",
    label: "GitHub",
    metadata: createMetadata(metaOverrides),
    subPages: [],
    tools: [],
    version: "2.0.1",
    ...rest,
  };
};

const assertNonNull = <T>(value: T | null): T => {
  if (value === null) {
    throw new Error("Expected value to be non-null");
  }
  return value;
};

// ============================================================================
// detectMetadataChanges
// ============================================================================

describe("detectMetadataChanges", () => {
  it("returns null when there is no previous toolkit", () => {
    const result = detectMetadataChanges(
      "Github",
      createMetadata(),
      "GitHub",
      undefined
    );

    expect(result).toBeNull();
  });

  it("reports no changes when metadata is identical", () => {
    const previous = createPreviousToolkit();
    const result = assertNonNull(
      detectMetadataChanges("Github", createMetadata(), "GitHub", previous)
    );

    expect(result.hasChanges).toBe(false);
    expect(result.fieldChanges).toHaveLength(0);
    expect(result.labelChanged).toBe(false);
    expect(result.gainedDesignSystemMetadata).toBe(false);
  });

  it("detects a single field change (iconUrl)", () => {
    const previous = createPreviousToolkit({
      metadata: { iconUrl: "https://old-cdn.example.com/github.svg" },
    });

    const result = assertNonNull(
      detectMetadataChanges("Github", createMetadata(), "GitHub", previous)
    );

    expect(result.hasChanges).toBe(true);
    expect(result.fieldChanges).toHaveLength(1);
    expect(result.fieldChanges[0]).toEqual({
      current: "https://design-system.arcade.dev/icons/github.svg",
      field: "iconUrl",
      previous: "https://old-cdn.example.com/github.svg",
    });
  });

  it("detects multiple field changes", () => {
    const previous = createPreviousToolkit({
      metadata: {
        category: "social",
        isHidden: true,
        isPro: true,
      },
    });

    const current = createMetadata({
      category: "development",
      isHidden: false,
      isPro: false,
    });

    const result = assertNonNull(
      detectMetadataChanges("Github", current, "GitHub", previous)
    );

    expect(result.hasChanges).toBe(true);
    expect(result.fieldChanges).toHaveLength(3);

    const changedFields = result.fieldChanges.map((c) => c.field);
    expect(changedFields).toContain("category");
    expect(changedFields).toContain("isPro");
    expect(changedFields).toContain("isHidden");
  });

  it("detects label change", () => {
    const previous = createPreviousToolkit({ label: "Github" });

    const result = assertNonNull(
      detectMetadataChanges("Github", createMetadata(), "GitHub", previous)
    );

    expect(result.hasChanges).toBe(true);
    expect(result.labelChanged).toBe(true);
    expect(result.previousLabel).toBe("Github");
    expect(result.currentLabel).toBe("GitHub");
    expect(result.fieldChanges).toHaveLength(0);
  });

  it("detects transition from default metadata to real DS metadata", () => {
    // Previous used defaults: development category + default icon URL pattern
    const previous = createPreviousToolkit({
      id: "Pylon",
      label: "Pylon",
      metadata: {
        category: "development",
        docsLink: "https://docs.arcade.dev/en/mcp-servers/development/pylon",
        iconUrl: "https://design-system.arcade.dev/icons/pylon.svg",
      },
    });

    // Now has real DS metadata with correct category and icon
    const current = createMetadata({
      category: "customer-support",
      docsLink: "https://docs.arcade.dev/en/mcp-servers/customer-support/pylon",
      iconUrl: "https://design-system.arcade.dev/icons/pylon.svg",
    });

    const result = assertNonNull(
      detectMetadataChanges("Pylon", current, "Pylon", previous)
    );

    expect(result.hasChanges).toBe(true);
    expect(result.gainedDesignSystemMetadata).toBe(true);
    // Also reports individual field diffs
    const changedFields = result.fieldChanges.map((c) => c.field);
    expect(changedFields).toContain("category");
    expect(changedFields).toContain("docsLink");
  });

  it("does NOT flag gainedDesignSystemMetadata for non-default previous", () => {
    // Previous already had real DS metadata (category is "sales", not default)
    const previous = createPreviousToolkit({
      id: "Salesforce",
      label: "Salesforce",
      metadata: {
        category: "sales",
        iconUrl: "https://design-system.arcade.dev/icons/salesforce.svg",
      },
    });

    const current = createMetadata({
      category: "sales",
      iconUrl: "https://design-system.arcade.dev/icons/salesforce-new.svg",
    });

    const result = detectMetadataChanges(
      "Salesforce",
      current,
      "Salesforce",
      previous
    );

    const nonNullResult = assertNonNull(result);

    expect(nonNullResult.gainedDesignSystemMetadata).toBe(false);
    // But still detects the iconUrl change
    expect(nonNullResult.hasChanges).toBe(true);
    expect(nonNullResult.fieldChanges).toHaveLength(1);
    expect(nonNullResult.fieldChanges[0]?.field).toBe("iconUrl");
  });

  it("handles *Api toolkit default detection correctly", () => {
    // PylonApi defaults: icon is "pylon.svg" (api stripped), category is "development"
    const previous = createPreviousToolkit({
      id: "PylonApi",
      label: "PylonApi",
      metadata: {
        category: "development",
        iconUrl: "https://design-system.arcade.dev/icons/pylon.svg",
      },
    });

    const current = createMetadata({
      category: "customer-support",
      iconUrl: "https://design-system.arcade.dev/icons/pylon.svg",
    });

    const result = detectMetadataChanges(
      "PylonApi",
      current,
      "Pylon API",
      previous
    );

    const nonNullResult = assertNonNull(result);
    expect(nonNullResult.gainedDesignSystemMetadata).toBe(true);
    expect(nonNullResult.labelChanged).toBe(true);
  });
});

// ============================================================================
// formatFreshnessWarnings
// ============================================================================

describe("formatFreshnessWarnings", () => {
  it("returns empty array when there are no changes", () => {
    const result: MetadataFreshnessResult = {
      currentLabel: "GitHub",
      fieldChanges: [],
      gainedDesignSystemMetadata: false,
      hasChanges: false,
      labelChanged: false,
      previousLabel: "GitHub",
      toolkitId: "Github",
    };

    expect(formatFreshnessWarnings(result)).toEqual([]);
  });

  it("formats gained DS metadata warning", () => {
    const result: MetadataFreshnessResult = {
      currentLabel: "Pylon",
      fieldChanges: [],
      gainedDesignSystemMetadata: true,
      hasChanges: true,
      labelChanged: false,
      previousLabel: "Pylon",
      toolkitId: "Pylon",
    };

    const warnings = formatFreshnessWarnings(result);
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain("[metadata-freshness]");
    expect(warnings[0]).toContain("Pylon");
    expect(warnings[0]).toContain("design system metadata");
  });

  it("formats label change warning", () => {
    const result: MetadataFreshnessResult = {
      currentLabel: "GitHub",
      fieldChanges: [],
      gainedDesignSystemMetadata: false,
      hasChanges: true,
      labelChanged: true,
      previousLabel: "Github",
      toolkitId: "Github",
    };

    const warnings = formatFreshnessWarnings(result);
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain('label changed "Github" → "GitHub"');
  });

  it("formats field change warnings", () => {
    const result: MetadataFreshnessResult = {
      currentLabel: "Salesforce",
      fieldChanges: [
        { current: "new.svg", field: "iconUrl", previous: "old.svg" },
        { current: "sales", field: "category", previous: "development" },
      ],
      gainedDesignSystemMetadata: false,
      hasChanges: true,
      labelChanged: false,
      previousLabel: "Salesforce",
      toolkitId: "Salesforce",
    };

    const warnings = formatFreshnessWarnings(result);
    expect(warnings).toHaveLength(2);
    expect(warnings[0]).toContain("iconUrl changed");
    expect(warnings[1]).toContain("category changed");
  });

  it("combines all warning types", () => {
    const result: MetadataFreshnessResult = {
      currentLabel: "Pylon Support",
      fieldChanges: [
        {
          current: "customer-support",
          field: "category",
          previous: "development",
        },
      ],
      gainedDesignSystemMetadata: true,
      hasChanges: true,
      labelChanged: true,
      previousLabel: "Pylon",
      toolkitId: "Pylon",
    };

    const warnings = formatFreshnessWarnings(result);
    // 1 gained DS + 1 label + 1 field = 3
    expect(warnings).toHaveLength(3);
  });
});

// ============================================================================
// Integration with mergeToolkit (via data-merger.test.ts)
// ============================================================================

describe("mergeToolkit metadata freshness integration", () => {
  // These tests import mergeToolkit to verify the step runs end-to-end
  // We reuse a minimal import here since data-merger.test.ts already
  // covers the happy path extensively.

  it("emits warnings when previous toolkit metadata differs", async () => {
    const { mergeToolkit } = await import("../../src/merger/data-merger");

    const tool = {
      auth: null,
      description: "A test tool",
      fullyQualifiedName: "TestKit.TestTool@1.0.0",
      name: "TestTool",
      output: null,
      parameters: [],
      qualifiedName: "TestKit.TestTool",
      secrets: [],
      toolkitDescription: "Toolkit",
    };

    const metadata = {
      category: "sales" as const,
      docsLink: "https://docs.arcade.dev/en/mcp-servers/sales/testkit",
      iconUrl: "https://design-system.arcade.dev/icons/testkit.svg",
      id: "TestKit",
      isBYOC: false,
      isComingSoon: false,
      isHidden: false,
      isPro: false,
      label: "Test Kit",
      type: "arcade" as const,
    };

    // Previous toolkit had category "development"
    const previousToolkit = {
      auth: null,
      customImports: [],
      description: "Old",
      documentationChunks: [],
      generatedAt: new Date().toISOString(),
      id: "TestKit",
      label: "Test Kit",
      metadata: {
        category: "development" as const,
        docsLink: "https://docs.arcade.dev/en/mcp-servers/development/testkit",
        iconUrl: "https://design-system.arcade.dev/icons/testkit.svg",
        isBYOC: false,
        isComingSoon: false,
        isHidden: false,
        isPro: false,
        type: "arcade" as const,
      },
      subPages: [],
      tools: [],
      version: "1.0.0",
    };

    const result = await mergeToolkit(
      "TestKit",
      [tool],
      metadata,
      null,
      undefined,
      {
        previousToolkit,
      }
    );

    const freshnessWarnings = result.warnings.filter((w) =>
      w.includes("[metadata-freshness]")
    );
    expect(freshnessWarnings.length).toBeGreaterThan(0);
    expect(freshnessWarnings.some((w) => w.includes("category changed"))).toBe(
      true
    );
    expect(freshnessWarnings.some((w) => w.includes("docsLink changed"))).toBe(
      true
    );
  });

  it("emits no freshness warnings when metadata is unchanged", async () => {
    const { mergeToolkit } = await import("../../src/merger/data-merger");

    const tool = {
      auth: null,
      description: "A test tool",
      fullyQualifiedName: "TestKit.TestTool@1.0.0",
      name: "TestTool",
      output: null,
      parameters: [],
      qualifiedName: "TestKit.TestTool",
      secrets: [],
      toolkitDescription: "Toolkit",
    };

    const metadata = {
      category: "development" as const,
      docsLink: "https://docs.arcade.dev/en/mcp-servers/development/testkit",
      iconUrl: "https://design-system.arcade.dev/icons/testkit.svg",
      id: "TestKit",
      isBYOC: false,
      isComingSoon: false,
      isHidden: false,
      isPro: false,
      label: "Test Kit",
      type: "arcade" as const,
    };

    const previousToolkit = {
      auth: null,
      customImports: [],
      description: "Same",
      documentationChunks: [],
      generatedAt: new Date().toISOString(),
      id: "TestKit",
      label: "Test Kit",
      metadata: {
        category: "development" as const,
        docsLink: "https://docs.arcade.dev/en/mcp-servers/development/testkit",
        iconUrl: "https://design-system.arcade.dev/icons/testkit.svg",
        isBYOC: false,
        isComingSoon: false,
        isHidden: false,
        isPro: false,
        type: "arcade" as const,
      },
      subPages: [],
      tools: [],
      version: "1.0.0",
    };

    const result = await mergeToolkit(
      "TestKit",
      [tool],
      metadata,
      null,
      undefined,
      {
        previousToolkit,
      }
    );

    const freshnessWarnings = result.warnings.filter((w) =>
      w.includes("[metadata-freshness]")
    );
    expect(freshnessWarnings).toHaveLength(0);
  });
});
