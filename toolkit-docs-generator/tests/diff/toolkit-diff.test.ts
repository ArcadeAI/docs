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
} from "../../src/diff/toolkit-diff";
import type {
  MergedTool,
  MergedToolkit,
  ToolDefinition,
  ToolkitMetadata,
} from "../../src/types/index";

// ============================================================================
// Test Fixtures
// ============================================================================

const createToolDefinition = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  auth: {
    providerId: "test",
    providerType: "oauth2",
    scopes: ["read", "write"],
  },
  description: "A test tool",
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  name: "TestTool",
  output: {
    description: "Result",
    type: "object",
  },
  parameters: [
    {
      description: "First parameter",
      enum: null,
      inferrable: true,
      name: "param1",
      required: true,
      type: "string",
    },
  ],
  qualifiedName: "TestKit.TestTool",
  secrets: [],
  toolkitDescription: "A test toolkit",
  ...overrides,
});

const createMergedTool = (overrides: Partial<MergedTool> = {}): MergedTool => ({
  auth: {
    providerId: "test",
    providerType: "oauth2",
    scopes: ["read", "write"],
  },
  description: "A test tool",
  documentationChunks: [],
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  name: "TestTool",
  output: {
    description: "Result",
    type: "object",
  },
  parameters: [
    {
      description: "First parameter",
      enum: null,
      inferrable: true,
      name: "param1",
      required: true,
      type: "string",
    },
  ],
  qualifiedName: "TestKit.TestTool",
  secrets: [],
  secretsInfo: [],
  ...overrides,
});

const createMergedToolkit = (
  overrides: Partial<MergedToolkit> = {}
): MergedToolkit => ({
  auth: {
    allScopes: ["read", "write"],
    providerId: "test",
    type: "oauth2",
  },
  customImports: [],
  description: "A test toolkit",
  documentationChunks: [],
  generatedAt: new Date().toISOString(),
  id: "TestKit",
  label: "Test Kit",
  metadata: {
    category: "development",
    docsLink: "https://docs.example.com/test",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isComingSoon: false,
    isHidden: false,
    isPro: false,
    type: "arcade",
  },
  subPages: [],
  tools: [createMergedTool()],
  version: "1.0.0",
  ...overrides,
});

const createToolkitMetadata = (
  overrides: Partial<ToolkitMetadata> = {}
): ToolkitMetadata => ({
  category: "development",
  docsLink: "https://docs.example.com/test",
  iconUrl: "https://example.com/icon.svg",
  id: "TestKit",
  isBYOC: false,
  isComingSoon: false,
  isHidden: false,
  isPro: false,
  label: "Test Kit",
  type: "arcade",
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
      changeType: "added",
      metadataOnly: false,
      qualifiedName: "TestKit.Tool2",
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
      changeType: "removed",
      metadataOnly: false,
      qualifiedName: "TestKit.Tool2",
      toolName: "Tool2",
    });
  });

  it("should detect modified tools", () => {
    const currentTools = [
      createToolDefinition({
        name: "Tool1",
        output: {
          description: "Result",
          type: "array",
        },
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          name: "Tool1",
          output: {
            description: "Result",
            type: "object",
          },
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(1);
    expect(changes[0]).toEqual({
      changeType: "modified",
      metadataOnly: false,
      qualifiedName: "TestKit.Tool1",
      toolName: "Tool1",
    });
  });

  it("ignores description-only differences", () => {
    const currentTools = [
      createToolDefinition({
        description: "Updated description text",
        name: "Tool1",
        output: {
          description: "Updated output description",
          type: "object",
        },
        parameters: [
          {
            description: "Updated parameter description",
            enum: null,
            inferrable: true,
            name: "param1",
            required: true,
            type: "string",
          },
        ],
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          description: "Original description text",
          name: "Tool1",
          output: {
            description: "Original output description",
            type: "object",
          },
          parameters: [
            {
              description: "Original parameter description",
              enum: null,
              inferrable: true,
              name: "param1",
              required: true,
              type: "string",
            },
          ],
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(0);
  });

  it("should detect parameter changes as modifications", () => {
    const currentTools = [
      createToolDefinition({
        name: "Tool1",
        parameters: [
          {
            description: "Parameter",
            enum: null,
            inferrable: true,
            name: "param1",
            required: true, // Changed from original
            type: "string",
          },
          {
            description: "New parameter",
            enum: null,
            inferrable: true,
            name: "newParam",
            required: false,
            type: "integer",
          },
        ],
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          name: "Tool1",
          parameters: [
            {
              description: "Parameter",
              enum: null,
              inferrable: true,
              name: "param1",
              required: false, // Original
              type: "string",
            },
          ],
          qualifiedName: "TestKit.Tool1",
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
        auth: {
          providerId: "github",
          providerType: "oauth2",
          scopes: ["repo", "user"], // Added 'user' scope
        },
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          auth: {
            providerId: "github",
            providerType: "oauth2",
            scopes: ["repo"],
          },
          name: "Tool1",
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(1);
    expect(changes[0]?.changeType).toBe("modified");
  });

  it("ignores oauth provider ID differences across sources", () => {
    const currentTools = [
      createToolDefinition({
        auth: {
          providerId: null,
          providerType: "oauth2",
          scopes: ["repo"],
        },
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          auth: {
            providerId: "github",
            providerType: "oauth2",
            scopes: ["repo"],
          },
          name: "Tool1",
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(0);
  });

  it("treats unknown output type as string for diff parity", () => {
    const currentTools = [
      createToolDefinition({
        name: "Tool1",
        output: {
          description: "Result",
          type: "unknown",
        },
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          name: "Tool1",
          output: {
            description: "Result",
            type: "string",
          },
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(0);
  });

  it("treats empty enum arrays as null for diff parity", () => {
    const currentTools = [
      createToolDefinition({
        name: "Tool1",
        parameters: [
          {
            description: "Mode",
            enum: [],
            inferrable: true,
            name: "mode",
            required: true,
            type: "string",
          },
        ],
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          name: "Tool1",
          parameters: [
            {
              description: "Mode",
              enum: null,
              inferrable: true,
              name: "mode",
              required: true,
              type: "string",
            },
          ],
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(0);
  });

  it("should handle tools with no previous toolkit", () => {
    const currentTools = [
      createToolDefinition({ name: "Tool1", qualifiedName: "TestKit.Tool1" }),
    ];

    const changes = compareTools(currentTools, undefined);

    expect(changes).toHaveLength(1);
    expect(changes[0]).toEqual({
      changeType: "added",
      metadataOnly: false,
      qualifiedName: "TestKit.Tool1",
      toolName: "Tool1",
    });
  });

  it("detects metadata-only change when definition is unchanged but metadata differs", () => {
    const currentTools = [
      createToolDefinition({
        metadata: {
          behavior: { operations: ["read"] },
          classification: { serviceDomains: ["github"] },
        },
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          metadata: null,
          name: "Tool1",
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(1);
    expect(changes[0]).toEqual({
      changeType: "modified",
      metadataOnly: true,
      qualifiedName: "TestKit.Tool1",
      toolName: "Tool1",
    });
  });

  it("does not flag metadataOnly when definition also changed", () => {
    const currentTools = [
      createToolDefinition({
        metadata: {
          behavior: { operations: ["read"] },
          classification: { serviceDomains: ["github"] },
        },
        name: "Tool1",
        parameters: [
          {
            description: null,
            enum: null,
            inferrable: true,
            name: "newParam",
            required: true,
            type: "string",
          },
        ],
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          metadata: null,
          name: "Tool1",
          parameters: [],
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(1);
    expect(changes[0]?.metadataOnly).toBe(false);
  });

  it("ignores metadata array order when values are equivalent", () => {
    const currentTools = [
      createToolDefinition({
        metadata: {
          behavior: { operations: ["write", "read"] },
          classification: { serviceDomains: ["git", "github"] },
        },
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          metadata: {
            behavior: { operations: ["read", "write"] },
            classification: { serviceDomains: ["github", "git"] },
          },
          name: "Tool1",
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);
    expect(changes).toHaveLength(0);
  });

  it("reports no change when both definition and metadata are identical", () => {
    const sharedMetadata = {
      behavior: { operations: ["read"], readOnly: true },
      classification: { serviceDomains: ["github"] },
    };
    const currentTools = [
      createToolDefinition({
        metadata: sharedMetadata,
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
      }),
    ];
    const previousToolkit = createMergedToolkit({
      tools: [
        createMergedTool({
          metadata: sharedMetadata,
          name: "Tool1",
          qualifiedName: "TestKit.Tool1",
        }),
      ],
    });

    const changes = compareTools(currentTools, previousToolkit);

    expect(changes).toHaveLength(0);
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
    const currentTools = [
      createToolDefinition({
        output: {
          description: "Result",
          type: "array",
        },
      }),
    ];
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
      tools: [
        createMergedTool({
          fullyQualifiedName: "TestKit.TestTool@1.0.0",
        }),
      ],
      version: "1.0.0",
    });

    const change = compareToolkit("TestKit", currentTools, previousToolkit);

    expect(change.changeType).toBe("modified");
    expect(change.toolChanges).toHaveLength(0);
    expect(change.versionChanged).toBe(true);
    expect(change.currentVersion).toBe("2.0.0");
    expect(change.previousVersion).toBe("1.0.0");
  });

  it("should return modified when metadata changes but tools do not", () => {
    const currentTools = [createToolDefinition()];
    const previousToolkit = createMergedToolkit();

    const change = compareToolkit(
      "TestKit",
      currentTools,
      previousToolkit,
      createToolkitMetadata({
        category: "databases",
        docsLink: "https://docs.example.com/databases/test-kit",
      })
    );

    expect(change.changeType).toBe("modified");
    expect(change.toolChanges).toHaveLength(0);
    expect(change.versionChanged).toBe(false);
    expect(change.metadataChanged).toBe(true);
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
        [
          createToolDefinition({
            output: {
              description: "Result",
              type: "array",
            },
          }),
        ],
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
              output: {
                description: "Result",
                type: "array",
              },
              qualifiedName: "Github.CreateIssue",
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
            fullyQualifiedName: "Versioned.Tool@2.0.0",
            qualifiedName: "Versioned.Tool",
          }),
        ],
      ],
    ]);
    const previousToolkits = new Map([
      [
        "Versioned",
        createMergedToolkit({
          id: "Versioned",
          tools: [
            createMergedTool({
              fullyQualifiedName: "Versioned.Tool@1.0.0",
              qualifiedName: "Versioned.Tool",
            }),
          ],
          version: "1.0.0",
        }),
      ],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(result.summary.modifiedToolkits).toBe(1);
    expect(result.summary.versionOnlyToolkits).toBe(1);
  });

  it("should detect metadata-only changes", () => {
    const currentToolkitData = new Map([
      [
        "TestKit",
        {
          metadata: createToolkitMetadata({
            category: "databases",
            docsLink: "https://docs.example.com/databases/test-kit",
          }),
          tools: [createToolDefinition()],
        },
      ],
    ]);
    const previousToolkits = new Map([["TestKit", createMergedToolkit()]]);

    const result = detectChanges(currentToolkitData, previousToolkits);

    expect(result.summary.modifiedToolkits).toBe(1);
    expect(result.summary.versionOnlyToolkits).toBe(0);
    expect(result.toolkitChanges[0]?.changeType).toBe("modified");
    expect(result.toolkitChanges[0]?.metadataChanged).toBe(true);
    expect(result.toolkitChanges[0]?.toolChanges).toHaveLength(0);
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
        [
          "TestKit",
          [
            createToolDefinition({
              output: {
                description: "Result",
                type: "array",
              },
            }),
          ],
        ],
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
              output: {
                description: "Result",
                type: "array",
              },
              qualifiedName: "Changed.Tool",
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
              output: {
                description: "Result",
                type: "array",
              },
              qualifiedName: "Modified.Tool",
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
              name: "NewTool",
              qualifiedName: "Github.NewTool",
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
              fullyQualifiedName: "Versioned.Tool@2.0.0",
              qualifiedName: "Versioned.Tool",
            }),
          ],
        ],
      ]),
      new Map([
        [
          "Versioned",
          createMergedToolkit({
            id: "Versioned",
            tools: [
              createMergedTool({
                fullyQualifiedName: "Versioned.Tool@1.0.0",
                qualifiedName: "Versioned.Tool",
              }),
            ],
            version: "1.0.0",
          }),
        ],
      ])
    );

    const lines = formatDetailedChanges(result);

    expect(lines.some((l) => l.includes("version 1.0.0 -> 2.0.0"))).toBe(true);
    expect(lines.some((l) => l.includes("version update only"))).toBe(true);
  });

  it("should annotate metadata-only updates", () => {
    const result = detectChanges(
      new Map([
        [
          "TestKit",
          {
            metadata: createToolkitMetadata({
              category: "databases",
              docsLink: "https://docs.example.com/databases/test-kit",
            }),
            tools: [createToolDefinition()],
          },
        ],
      ]),
      new Map([["TestKit", createMergedToolkit()]])
    );

    const lines = formatDetailedChanges(result);
    expect(lines.some((l) => l.includes("metadata update only"))).toBe(true);
  });

  it("annotates metadata-only tool modifications in detailed output", () => {
    const result = detectChanges(
      new Map([
        [
          "TestKit",
          {
            metadata: createToolkitMetadata(),
            tools: [
              createToolDefinition({
                metadata: {
                  behavior: { operations: ["read"] },
                  classification: { serviceDomains: ["github"] },
                },
                name: "Tool1",
                qualifiedName: "TestKit.Tool1",
              }),
            ],
          },
        ],
      ]),
      new Map([
        [
          "TestKit",
          createMergedToolkit({
            tools: [
              createMergedTool({
                metadata: null,
                name: "Tool1",
                qualifiedName: "TestKit.Tool1",
              }),
            ],
          }),
        ],
      ])
    );

    const lines = formatDetailedChanges(result);
    expect(lines.some((line) => line.includes("Tool1 (metadata only)"))).toBe(
      true
    );
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
