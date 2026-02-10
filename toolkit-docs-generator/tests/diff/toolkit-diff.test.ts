/**
 * Tests for Toolkit Change Detection
 */
import { describe, expect, it } from "vitest";
import {
  compareToolkit,
  compareTools,
  detectChanges,
  formatChangeSummary,
  formatDetailedChanges,
  getChangedToolkitIds,
  hasChanges,
} from "../../src/diff/toolkit-diff.js";
import type {
  MergedTool,
  MergedToolkit,
  ToolDefinition,
} from "../../src/types/index.js";

// ============================================================================
// Test Fixtures
// ============================================================================

const createToolDefinition = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  name: "TestTool",
  qualifiedName: "TestKit.TestTool",
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  description: "A test tool",
  toolkitDescription: "A test toolkit",
  parameters: [
    {
      name: "param1",
      type: "string",
      required: true,
      description: "First parameter",
      enum: null,
      inferrable: true,
    },
  ],
  auth: {
    providerId: "test",
    providerType: "oauth2",
    scopes: ["read", "write"],
  },
  secrets: [],
  output: {
    type: "object",
    description: "Result",
  },
  ...overrides,
});

const createMergedTool = (overrides: Partial<MergedTool> = {}): MergedTool => ({
  name: "TestTool",
  qualifiedName: "TestKit.TestTool",
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  description: "A test tool",
  parameters: [
    {
      name: "param1",
      type: "string",
      required: true,
      description: "First parameter",
      enum: null,
      inferrable: true,
    },
  ],
  auth: {
    providerId: "test",
    providerType: "oauth2",
    scopes: ["read", "write"],
  },
  secrets: [],
  secretsInfo: [],
  output: {
    type: "object",
    description: "Result",
  },
  documentationChunks: [],
  ...overrides,
});

const createMergedToolkit = (
  overrides: Partial<MergedToolkit> = {}
): MergedToolkit => ({
  id: "TestKit",
  label: "Test Kit",
  version: "1.0.0",
  description: "A test toolkit",
  metadata: {
    category: "development",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "https://docs.example.com/test",
    isComingSoon: false,
    isHidden: false,
  },
  auth: {
    type: "oauth2",
    providerId: "test",
    allScopes: ["read", "write"],
  },
  tools: [createMergedTool()],
  documentationChunks: [],
  customImports: [],
  subPages: [],
  generatedAt: new Date().toISOString(),
  ...overrides,
});

// ============================================================================
// compareTools Tests
// ============================================================================

describe("compareTools", () => {
  it("should return empty array when tools are identical", () => {
    const currentTools = [createToolDefinition()];
    const previousToolkit = createMergedToolkit();

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(0);
  });

  it("should detect added tools", () => {
    const currentTools = [
      createToolDefinition({ name: "Tool1", qualifiedName: "TestKit.Tool1" }),
      createToolDefinition({ name: "Tool2", qualifiedName: "TestKit.Tool2" }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({ name: "Tool1", qualifiedName: "TestKit.Tool1" }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(1);
    expect(changes[0]).toEqual({
      qualifiedName: "TestKit.Tool2",
      changeType: "added",
      toolName: "Tool2",
    });
  });

  it("should detect removed tools", () => {
    const currentTools = [
      createToolDefinition({ name: "Tool1", qualifiedName: "TestKit.Tool1" }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({ name: "Tool1", qualifiedName: "TestKit.Tool1" }),
        createMergedTool({ name: "Tool2", qualifiedName: "TestKit.Tool2" }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(1);
    expect(changes[0]).toEqual({
      qualifiedName: "TestKit.Tool2",
      changeType: "removed",
      toolName: "Tool2",
    });
  });

  it("should detect modified tools", () => {
    const currentTools = [
      createToolDefinition({
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
        description: "Updated description",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          name: "Tool1",
          qualifiedName: "TestKit.Tool1",
          description: "Original description",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(1);
    expect(changes[0]).toEqual({
      qualifiedName: "TestKit.Tool1",
      changeType: "modified",
      toolName: "Tool1",
    });
  });

  it("should detect parameter changes as modifications", () => {
    const currentTools = [
      createToolDefinition({
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
        parameters: [
          {
            name: "param1",
            type: "string",
            required: true, // Changed from original
            description: "Parameter",
            enum: null,
            inferrable: true,
          },
          {
            name: "newParam",
            type: "integer",
            required: false,
            description: "New parameter",
            enum: null,
            inferrable: true,
          },
        ],
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          name: "Tool1",
          qualifiedName: "TestKit.Tool1",
          parameters: [
            {
              name: "param1",
              type: "string",
              required: false, // Original
              description: "Parameter",
              enum: null,
              inferrable: true,
            },
          ],
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(1);
    expect(changes[0]?.changeType).toBe("modified");
  });

  it("should detect auth scope changes as modifications", () => {
    const currentTools = [
      createToolDefinition({
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
        auth: {
          providerId: "github",
          providerType: "oauth2",
          scopes: ["repo", "user"], // Added 'user' scope
        },
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          name: "Tool1",
          qualifiedName: "TestKit.Tool1",
          auth: {
            providerId: "github",
            providerType: "oauth2",
            scopes: ["repo"],
          },
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(1);
    expect(changes[0]?.changeType).toBe("modified");
  });

  it("should handle tools with no previous toolkit", () => {
    const currentTools = [
      createToolDefinition({ name: "Tool1", qualifiedName: "TestKit.Tool1" }),
    ];

    const changes = compareTools(currentTools, undefined);

    expect(changes).toHaveLength(1);
    expect(changes[0]).toEqual({
      qualifiedName: "TestKit.Tool1",
      changeType: "added",
      toolName: "Tool1",
    });
  });
});

// ============================================================================
// compareToolkit Tests
// ============================================================================

describe("compareToolkit", () => {
  it("should return added for new toolkit", () => {
    const currentTools = [
      createToolDefinition({ qualifiedName: "NewKit.Tool1" }),
    ];

    const change = compareToolkit("NewKit", currentTools, undefined);

    expect(change.changeType).toBe("added");
    expect(change.currentToolCount).toBe(1);
    expect(change.previousToolCount).toBe(0);
    expect(change.versionChanged).toBe(false);
  });

  it("should return unchanged when no changes", () => {
    const currentTools = [createToolDefinition()];
    const previousToolkit = createMergedToolkit();

    const change = compareToolkit("TestKit", currentTools, previousToolkit);

    expect(change.changeType).toBe("unchanged");
    expect(change.versionChanged).toBe(false);
  });

  it("should return modified when tools changed", () => {
    const currentTools = [createToolDefinition({ description: "Updated" })];
    const previousToolkit = createMergedToolkit();

    const change = compareToolkit("TestKit", currentTools, previousToolkit);

    expect(change.changeType).toBe("modified");
    expect(change.toolChanges).toHaveLength(1);
  });

  it("should return modified when version changes but tools do not", () => {
    const currentTools = [
      createToolDefinition({
        fullyQualifiedName: "TestKit.TestTool@2.0.0",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      version: "1.0.0",
      tools: [
        createMergedTool({
          fullyQualifiedName: "TestKit.TestTool@1.0.0",
        }),
      ],
    });

    const change = compareToolkit("TestKit", currentTools, previousToolkit);

    expect(change.changeType).toBe("modified");
    expect(change.toolChanges).toHaveLength(0);
    expect(change.versionChanged).toBe(true);
    expect(change.currentVersion).toBe("2.0.0");
    expect(change.previousVersion).toBe("1.0.0");
  });
});

// ============================================================================
// detectChanges Tests
// ============================================================================

describe("detectChanges", () => {
  it("should detect new toolkits", () => {
    const currentToolkitTools = new Map([
      [
        "Github",
        [createToolDefinition({ qualifiedName: "Github.CreateIssue" })],
      ],
    ]);
    const previousToolkits = new Map<string, MergedToolkit>();

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(result.summary.newToolkits).toBe(1);
    expect(result.summary.unchangedToolkits).toBe(0);
    expect(result.toolkitChanges[0]?.changeType).toBe("added");
  });

  it("should detect removed toolkits", () => {
    const currentToolkitTools = new Map<string, readonly ToolDefinition[]>();
    const previousToolkits = new Map([
      ["Github", createMergedToolkit({ id: "Github" })],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(result.summary.removedToolkits).toBe(1);
    expect(result.toolkitChanges[0]?.changeType).toBe("removed");
  });

  it("should detect modified toolkits", () => {
    const currentToolkitTools = new Map([
      [
        "TestKit",
        [createToolDefinition({ description: "Updated description" })],
      ],
    ]);
    const previousToolkits = new Map([["TestKit", createMergedToolkit()]]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(result.summary.modifiedToolkits).toBe(1);
    expect(result.toolkitChanges[0]?.changeType).toBe("modified");
  });

  it("should detect unchanged toolkits", () => {
    const currentToolkitTools = new Map([
      ["TestKit", [createToolDefinition()]],
    ]);
    const previousToolkits = new Map([["TestKit", createMergedToolkit()]]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(result.summary.unchangedToolkits).toBe(1);
    expect(result.toolkitChanges[0]?.changeType).toBe("unchanged");
  });

  it("should handle case-insensitive toolkit IDs", () => {
    const currentToolkitTools = new Map([
      ["TESTKIT", [createToolDefinition()]],
    ]);
    const previousToolkits = new Map([
      ["testkit", createMergedToolkit({ id: "testkit" })],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(result.summary.unchangedToolkits).toBe(1);
  });

  it("should count tools correctly in summary", () => {
    const currentToolkitTools = new Map([
      [
        "Github",
        [
          createToolDefinition({
            name: "CreateIssue",
            qualifiedName: "Github.CreateIssue",
          }),
          createToolDefinition({
            name: "NewTool",
            qualifiedName: "Github.NewTool",
          }),
        ],
      ],
    ]);
    const previousToolkits = new Map([
      [
        "Github",
        createMergedToolkit({
          id: "Github",
          tools: [
            createMergedTool({
              name: "CreateIssue",
              qualifiedName: "Github.CreateIssue",
              description: "Old description",
            }),
            createMergedTool({
              name: "RemovedTool",
              qualifiedName: "Github.RemovedTool",
            }),
          ],
        }),
      ],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(result.summary.newTools).toBe(1); // NewTool added
    expect(result.summary.removedTools).toBe(1); // RemovedTool removed
    expect(result.summary.modifiedTools).toBe(1); // CreateIssue modified
  });

  it("should track version-only changes in summary", () => {
    const currentToolkitTools = new Map([
      [
        "Versioned",
        [
          createToolDefinition({
            qualifiedName: "Versioned.Tool",
            fullyQualifiedName: "Versioned.Tool@2.0.0",
          }),
        ],
      ],
    ]);
    const previousToolkits = new Map([
      [
        "Versioned",
        createMergedToolkit({
          id: "Versioned",
          version: "1.0.0",
          tools: [
            createMergedTool({
              qualifiedName: "Versioned.Tool",
              fullyQualifiedName: "Versioned.Tool@1.0.0",
            }),
          ],
        }),
      ],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(result.summary.modifiedToolkits).toBe(1);
    expect(result.summary.versionOnlyToolkits).toBe(1);
  });
});

// ============================================================================
// hasChanges Tests
// ============================================================================

describe("hasChanges", () => {
  it("should return false when no changes", () => {
    const result = detectChanges(
      new Map([["TestKit", [createToolDefinition()]]]),
      new Map([["TestKit", createMergedToolkit()]])
    );

    expect(hasChanges(result)).toBe(false);
  });

  it("should return true when there are new toolkits", () => {
    const result = detectChanges(
      new Map([
        ["NewKit", [createToolDefinition({ qualifiedName: "NewKit.Tool" })]],
      ]),
      new Map()
    );

    expect(hasChanges(result)).toBe(true);
  });

  it("should return true when there are modified toolkits", () => {
    const result = detectChanges(
      new Map([
        ["TestKit", [createToolDefinition({ description: "Changed" })]],
      ]),
      new Map([["TestKit", createMergedToolkit()]])
    );

    expect(hasChanges(result)).toBe(true);
  });
});

// ============================================================================
// getChangedToolkitIds Tests
// ============================================================================

describe("getChangedToolkitIds", () => {
  it("should return empty array when no changes", () => {
    const result = detectChanges(
      new Map([["TestKit", [createToolDefinition()]]]),
      new Map([["TestKit", createMergedToolkit()]])
    );

    expect(getChangedToolkitIds(result)).toEqual([]);
  });

  it("should return IDs of changed toolkits only", () => {
    const result = detectChanges(
      new Map([
        [
          "Changed",
          [
            createToolDefinition({
              qualifiedName: "Changed.Tool",
              description: "New",
            }),
          ],
        ],
        [
          "Unchanged",
          [createToolDefinition({ qualifiedName: "Unchanged.Tool" })],
        ],
      ]),
      new Map([
        [
          "Changed",
          createMergedToolkit({
            id: "Changed",
            tools: [createMergedTool({ qualifiedName: "Changed.Tool" })],
          }),
        ],
        [
          "Unchanged",
          createMergedToolkit({
            id: "Unchanged",
            tools: [createMergedTool({ qualifiedName: "Unchanged.Tool" })],
          }),
        ],
      ])
    );

    expect(getChangedToolkitIds(result)).toEqual(["Changed"]);
  });
});

// ============================================================================
// formatChangeSummary Tests
// ============================================================================

describe("formatChangeSummary", () => {
  it("should format summary correctly", () => {
    const result = detectChanges(
      new Map([
        ["New", [createToolDefinition({ qualifiedName: "New.Tool" })]],
        [
          "Modified",
          [
            createToolDefinition({
              qualifiedName: "Modified.Tool",
              description: "New desc",
            }),
          ],
        ],
      ]),
      new Map([
        [
          "Modified",
          createMergedToolkit({
            id: "Modified",
            tools: [createMergedTool({ qualifiedName: "Modified.Tool" })],
          }),
        ],
        ["Removed", createMergedToolkit({ id: "Removed" })],
      ])
    );

    const summary = formatChangeSummary(result);

    expect(summary).toContain("new toolkit");
    expect(summary).toContain("removed toolkit");
    expect(summary).toContain("modified toolkit");
  });

  it("should return 'No toolkits found' for empty result", () => {
    const result = detectChanges(new Map(), new Map());

    expect(formatChangeSummary(result)).toBe("No toolkits found");
  });
});

// ============================================================================
// formatDetailedChanges Tests
// ============================================================================

describe("formatDetailedChanges", () => {
  it("should format detailed changes with tool-level info", () => {
    const result = detectChanges(
      new Map([
        [
          "Github",
          [
            createToolDefinition({
              qualifiedName: "Github.NewTool",
              name: "NewTool",
            }),
          ],
        ],
      ]),
      new Map()
    );

    const lines = formatDetailedChanges(result);

    expect(lines.some((l) => l.includes("[NEW]"))).toBe(true);
    expect(lines.some((l) => l.includes("Github"))).toBe(true);
    expect(lines.some((l) => l.includes("NewTool"))).toBe(true);
  });

  it("should annotate version-only updates", () => {
    const result = detectChanges(
      new Map([
        [
          "Versioned",
          [
            createToolDefinition({
              qualifiedName: "Versioned.Tool",
              fullyQualifiedName: "Versioned.Tool@2.0.0",
            }),
          ],
        ],
      ]),
      new Map([
        [
          "Versioned",
          createMergedToolkit({
            id: "Versioned",
            version: "1.0.0",
            tools: [
              createMergedTool({
                qualifiedName: "Versioned.Tool",
                fullyQualifiedName: "Versioned.Tool@1.0.0",
              }),
            ],
          }),
        ],
      ])
    );

    const lines = formatDetailedChanges(result);

    expect(lines.some((l) => l.includes("version 1.0.0 -> 2.0.0"))).toBe(true);
    expect(lines.some((l) => l.includes("version update only"))).toBe(true);
  });

  it("should skip unchanged toolkits", () => {
    const result = detectChanges(
      new Map([["TestKit", [createToolDefinition()]]]),
      new Map([["TestKit", createMergedToolkit()]])
    );

    const lines = formatDetailedChanges(result);

    expect(lines).toHaveLength(0);
  });
});
