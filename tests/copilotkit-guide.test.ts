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
// The install step must pull in zod — the code samples import it, and it
// otherwise resolves only as a transitive/peer dep. Matches `npm install … zod`
// or `pnpm add … zod`.
const INSTALL_ZOD_RE = /(?:install|add)\b[^\n]*\bzod\b/;

const GUIDE_PAGE = "app/en/get-started/agent-frameworks/copilotkit/page.mdx";

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

// These lock in the fixes surfaced by building the guide as a real app: the
// scaffold path must be one that actually exists, the code samples must be the
// versions verified to typecheck/lint, and the prose-only steps must ship code.
describe("CopilotKit guide content reflects the validated fixes", () => {
  const content = read(join(process.cwd(), GUIDE_PAGE));

  test("scaffolds with create-next-app, not the interactive copilotkit CLI", () => {
    expect(content).toContain("create-next-app");
    expect(content).not.toContain("copilotkit@latest init");
  });

  test("installs zod alongside the SDKs", () => {
    expect(content).toMatch(INSTALL_ZOD_RE);
  });

  test("renders a typed tool result instead of any", () => {
    expect(content).not.toContain("parse<any>");
    expect(content).toContain("parse<ToolResult>");
  });

  test("shows the client-side CopilotKit provider wiring", () => {
    expect(content).toContain('filename="app/providers.tsx"');
    expect(content).toContain("useSingleEndpoint");
  });
});
