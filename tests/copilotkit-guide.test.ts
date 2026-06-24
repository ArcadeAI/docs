// These tests MUST fail until the implementation (Wave 2) lands.
// They assert the end state of four deliverables that do not exist yet.

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

function read(p: string): string {
  return existsSync(p) ? readFileSync(p, "utf-8") : "";
}

describe("CopilotKit agent-framework guide", () => {
  test("_meta.tsx registers a copilotkit key titled CopilotKit", () => {
    const filePath = join(
      process.cwd(),
      "app/en/get-started/agent-frameworks/_meta.tsx"
    );
    const content = read(filePath);
    expect(content).toContain("copilotkit");
    expect(content).toContain('"CopilotKit"');
  });

  test("agent-framework-tabs.tsx contains PlatformCard link and name for CopilotKit", () => {
    const filePath = join(
      process.cwd(),
      "app/_components/agent-framework-tabs.tsx"
    );
    const content = read(filePath);
    expect(content).toContain("/en/get-started/agent-frameworks/copilotkit");
    expect(content).toContain('name="CopilotKit"');
  });

  test("copilotkit page.mdx exists and has frontmatter with title and description", () => {
    const filePath = join(
      process.cwd(),
      "app/en/get-started/agent-frameworks/copilotkit/page.mdx"
    );
    expect(existsSync(filePath)).toBe(true);
    const content = read(filePath);
    expect(content).toContain("title:");
    expect(content).toContain("description:");
  });

  test("copilotkit SVG icon exists and contains <svg", () => {
    const filePath = join(process.cwd(), "public/images/icons/copilotkit.svg");
    expect(existsSync(filePath)).toBe(true);
    const content = read(filePath);
    expect(content).toContain("<svg");
  });
});
