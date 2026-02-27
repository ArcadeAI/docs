import { describe, expect, it } from "vitest";
import { filterTools } from "../../../app/_components/toolkit-docs/components/available-tools-table";

const makeTool = (
  name: string,
  behavior: Record<string, boolean | undefined>
) => ({
  name,
  qualifiedName: `Test.${name}`,
  description: null,
  metadata: {
    classification: { serviceDomains: [] },
    behavior: {
      operations: [],
      readOnly: behavior.readOnly,
      destructive: behavior.destructive,
      idempotent: behavior.idempotent,
      openWorld: behavior.openWorld,
    },
    extras: null,
  },
});

describe("filterTools — behavior flags", () => {
  const tools = [
    makeTool("ReadOnly", { readOnly: true, destructive: false }),
    makeTool("Destructive", { readOnly: false, destructive: true }),
    makeTool("Safe", { readOnly: false, destructive: false }),
    {
      name: "NoMeta",
      qualifiedName: "Test.NoMeta",
      description: null,
      metadata: null,
    },
  ];

  it("returns all tools when no behavior flags are active", () => {
    expect(filterTools(tools, "", "all")).toHaveLength(4);
  });

  it("filters to readOnly=true tools", () => {
    const result = filterTools(tools, "", "all", {
      behaviorFlags: { readOnly: true },
    });
    expect(result.map((tool) => tool.name)).toEqual(["ReadOnly"]);
  });

  it("filters to destructive=true tools", () => {
    const result = filterTools(tools, "", "all", {
      behaviorFlags: { destructive: true },
    });
    expect(result.map((tool) => tool.name)).toEqual(["Destructive"]);
  });

  it("ANDs multiple flags together", () => {
    const result = filterTools(tools, "", "all", {
      behaviorFlags: { readOnly: true, destructive: true },
    });
    expect(result).toHaveLength(0);
  });

  it("ignores behavior flags explicitly set to undefined", () => {
    const result = filterTools(tools, "", "all", {
      behaviorFlags: {
        readOnly: undefined,
      },
    });
    expect(result).toHaveLength(4);
  });
});
