import { describe, expect, it } from "vitest";
import { filterTools } from "../../../app/_components/toolkit-docs/components/available-tools-table";

const makeTool = (name: string, operations: string[]) => ({
  name,
  qualifiedName: `Slack.${name}`,
  description: null,
  metadata: {
    classification: { serviceDomains: [] },
    behavior: {
      operations,
      readOnly: false,
      destructive: false,
      idempotent: false,
      openWorld: false,
    },
    extras: null,
  },
});

describe("filterTools — operations", () => {
  const tools = [
    makeTool("GetMessages", ["read"]),
    makeTool("PostMessage", ["create"]),
    makeTool("DeleteMessage", ["delete"]),
    {
      name: "NoMeta",
      qualifiedName: "Slack.NoMeta",
      description: null,
      metadata: null,
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
