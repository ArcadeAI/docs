import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { ToolkitHeader } from "../../../app/_components/toolkit-docs/components/toolkit-header";

vi.mock("@arcadeai/design-system", () => ({
  Badge: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => React.createElement("span", { className }, children),
  ByocBadge: ({ className }: { className?: string }) =>
    React.createElement("span", { className }, "BYOC"),
  ProBadge: ({ className }: { className?: string }) =>
    React.createElement("span", { className }, "Pro"),
}));

const metadata = {
  category: "development",
  iconUrl: "https://example.com/icon.svg",
  isBYOC: false,
  isPro: false,
  type: "verified",
  docsLink: "https://docs.arcade.dev/en/resources/integrations/github",
} as const;

const auth = {
  type: "oauth2",
  providerId: "github",
  allScopes: [],
} as const;

describe("ToolkitHeader", () => {
  it("does not render PyPI or license badges", () => {
    const html = renderToStaticMarkup(
      React.createElement(ToolkitHeader, {
        auth,
        description: "GitHub repository and collaboration tools",
        label: "GitHub",
        metadata,
        toolStats: { total: 5, withScopes: 2, withSecrets: 1 },
        version: "1.0.0",
      })
    );

    expect(html).not.toContain("img.shields.io");
    expect(html).not.toContain("pypi.org/project");
    expect(html).not.toContain("License-MIT-yellow.svg");
    expect(html).not.toContain("PyPI Version");
  });
});
