import { describe, expect, it } from "vitest";
import { filterTools } from "@/components/toolkit-docs/components/available-tools-filter";

const makeTool = (
  name: string,
  behavior: Record<string, boolean | undefined>
) => ({
  description: null,
  metadata: {
    behavior: {
      destructive: behavior.destructive,
      idempotent: behavior.idempotent,
      openWorld: behavior.openWorld,
      operations: [],
      readOnly: behavior.readOnly,
    },
    classification: { serviceDomains: [] },
    extras: null,
  },
  name,
  qualifiedName: `Test.${name}`,
});

describe("filterTools — behavior flags", () => {
  const tools = [
    makeTool("ReadOnly", { destructive: false, readOnly: true }),
    makeTool("Destructive", { destructive: true, readOnly: false }),
    makeTool("Safe", { destructive: false, readOnly: false }),
    {
      description: null,
      metadata: null,
      name: "NoMeta",
      qualifiedName: "Test.NoMeta",
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
      behaviorFlags: { destructive: true, readOnly: true },
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
