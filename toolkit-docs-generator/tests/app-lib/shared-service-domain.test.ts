import { describe, expect, it } from "vitest";
import { getSharedServiceDomain } from "../../../app/_components/toolkit-docs/components/toolkit-page";

const makeTool = (domains: string[]) => ({
  metadata: {
    classification: { serviceDomains: domains },
    behavior: { operations: [] },
    extras: null,
  },
});

describe("getSharedServiceDomain", () => {
  it("returns the domain when all tools share exactly one", () => {
    const tools = [
      makeTool(["messaging"]),
      makeTool(["messaging"]),
      makeTool(["messaging"]),
    ];
    expect(getSharedServiceDomain(tools)).toBe("messaging");
  });

  it("returns null when tools have different domains", () => {
    const tools = [makeTool(["messaging"]), makeTool(["email"])];
    expect(getSharedServiceDomain(tools)).toBeNull();
  });

  it("returns null when any tool has no metadata", () => {
    const tools = [makeTool(["messaging"]), { metadata: null }];
    expect(
      getSharedServiceDomain(
        tools as Parameters<typeof getSharedServiceDomain>[0]
      )
    ).toBeNull();
  });

  it("returns null for an empty tool list", () => {
    expect(getSharedServiceDomain([])).toBeNull();
  });

  it("returns null when a tool has multiple domains", () => {
    const tools = [makeTool(["messaging", "email"]), makeTool(["messaging"])];
    expect(getSharedServiceDomain(tools)).toBeNull();
  });

  it("returns null when domain is not a string", () => {
    const tools = [
      {
        metadata: {
          classification: { serviceDomains: [123] },
          behavior: { operations: [] },
          extras: null,
        },
      },
      makeTool(["messaging"]),
    ];
    expect(
      getSharedServiceDomain(
        tools as Parameters<typeof getSharedServiceDomain>[0]
      )
    ).toBeNull();
  });
});
