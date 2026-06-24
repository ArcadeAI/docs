// Contract test for the CopilotKit agent-framework guide: verifies the guide
// page, its nav registration, the framework-tab card, and the icon are wired up
// and remain consistent with each other.

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

// Key and title asserted together, not as two unrelated substrings.
const META_KEY_RE = /copilotkit:\s*\{\s*title:\s*"CopilotKit"/;
// Frontmatter keys must carry real values, not just be present.
const FRONTMATTER_TITLE_RE = /title:\s*"[^"]+"/;
const FRONTMATTER_DESCRIPTION_RE = /description:\s*"[^"]+"/;

function read(p: string): string {
  return existsSync(p) ? readFileSync(p, "utf-8") : "";
}

describe("CopilotKit agent-framework guide", () => {
  test("_meta.tsx registers a copilotkit key titled CopilotKit", () => {
    const content = read(
      join(process.cwd(), "app/en/get-started/agent-frameworks/_meta.tsx")
    );
    expect(content).toMatch(META_KEY_RE);
  });

  test("agent-framework-tabs.tsx has a CopilotKit PlatformCard linking to the guide", () => {
    const content = read(
      join(process.cwd(), "app/_components/agent-framework-tabs.tsx")
    );
    expect(content).toContain("PlatformCard");
    expect(content).toContain('name="CopilotKit"');
    expect(content).toContain(
      'link="/en/get-started/agent-frameworks/copilotkit"'
    );
  });

  test("the copilotkit page exists with a non-empty title and description", () => {
    const filePath = join(
      process.cwd(),
      "app/en/get-started/agent-frameworks/copilotkit/page.mdx"
    );
    expect(existsSync(filePath)).toBe(true);
    const content = read(filePath);
    expect(content).toMatch(FRONTMATTER_TITLE_RE);
    expect(content).toMatch(FRONTMATTER_DESCRIPTION_RE);
  });

  test("the CopilotKit icon exists and is a well-formed SVG", () => {
    const filePath = join(process.cwd(), "public/images/icons/copilotkit.svg");
    expect(existsSync(filePath)).toBe(true);
    const content = read(filePath);
    expect(content).toContain("<svg");
    expect(content).toContain("</svg>");
  });
});
