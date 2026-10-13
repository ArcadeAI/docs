// Contract test for the CopilotKit agent-framework guide: verifies the guide
// page, its nav registration, the framework-tab card, and the icon are wired up
// and remain consistent with each other.

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import {
  CONTENT_ROOT,
  readFrontmatterValue,
  readMetaPages,
  resolveContentFile,
} from "./helpers/content-paths";

// The install step must pull in zod — the code samples import it, and it
// otherwise resolves only as a transitive/peer dep. Matches `npm install … zod`
// or `pnpm add … zod`.
const INSTALL_ZOD_RE = /(?:install|add)\b[^\n]*\bzod\b/;

const FRAMEWORKS_DIR = join(CONTENT_ROOT, "get-started", "agent-frameworks");
const GUIDE_URL = "/en/get-started/agent-frameworks/copilotkit";

function read(p: string): string {
  return existsSync(p) ? readFileSync(p, "utf-8") : "";
}

describe("CopilotKit agent-framework guide", () => {
  test("meta.json lists the copilotkit page", () => {
    expect(readMetaPages(FRAMEWORKS_DIR)).toContain("copilotkit");
  });

  test("agent-framework-tabs.tsx has a CopilotKit PlatformCard linking to the guide", () => {
    const content = read(
      join(process.cwd(), "components/agent-framework-tabs.tsx")
    );
    expect(content).toContain("PlatformCard");
    expect(content).toContain('name="CopilotKit"');
    expect(content).toContain(`link="${GUIDE_URL}"`);
  });

  test("the copilotkit page exists, is labelled CopilotKit in the sidebar, and has a description", () => {
    const filePath = resolveContentFile(GUIDE_URL);
    expect(filePath, `Expected a content page for ${GUIDE_URL}`).not.toBeNull();
    const content = read(filePath ?? "");
    // Frontmatter keys must carry real values, not just be present.
    // Fumadocs reads the sidebar label from `sidebarTitle` (falling back to
    // `title`).
    expect(readFrontmatterValue(content, "title")).toBeTruthy();
    const sidebarLabel =
      readFrontmatterValue(content, "sidebarTitle") ??
      readFrontmatterValue(content, "title");
    expect(sidebarLabel).toBe("CopilotKit");
    expect(readFrontmatterValue(content, "description")).toBeTruthy();
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
  const content = read(resolveContentFile(GUIDE_URL) ?? "");

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
    // Fumadocs code-fence meta names the file with `title=`.
    expect(content).toContain('title="app/providers.tsx"');
    expect(content).toContain("useSingleEndpoint");
  });
});
