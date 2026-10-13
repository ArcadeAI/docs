import { describe, expect, it } from "vitest";
import { filterTools } from "@/components/toolkit-docs/components/available-tools-filter";

const makeTool = (name: string, operations: string[]) => ({
  description: null,
  metadata: {
    behavior: {
      destructive: false,
      idempotent: false,
      openWorld: false,
      operations,
      readOnly: false,
    },
    classification: { serviceDomains: [] },
    extras: null,
  },
  name,
  qualifiedName: `Slack.${name}`,
});

describe("filterTools — operations", () => {
  const tools = [
    makeTool("GetMessages", ["read"]),
    makeTool("PostMessage", ["create"]),
    makeTool("DeleteMessage", ["delete"]),
    {
      description: null,
      metadata: null,
      name: "NoMeta",
      qualifiedName: "Slack.NoMeta",
    },
  ];

  it("returns all tools when no operations are selected", () => {
    expect(filterTools(tools, "", "all")).toHaveLength(4);
  });

  it("returns only tools matching selected operations", () => {
    const result = filterTools(tools, "", "all", {
      activeOperations: new Set(["read"]),
    });
    expect(result.map((tool) => tool.name)).toEqual(["GetMessages"]);
  });

  it("returns a union when multiple operations are selected", () => {
    const result = filterTools(tools, "", "all", {
      activeOperations: new Set(["read", "create"]),
    });
    expect(result.map((tool) => tool.name)).toEqual([
      "GetMessages",
      "PostMessage",
    ]);
  });

  it("does not include tools without metadata when operation filters are active", () => {
    const result = filterTools(tools, "", "all", {
      activeOperations: new Set(["read"]),
    });
    expect(result.map((tool) => tool.name)).not.toContain("NoMeta");
  });
});
