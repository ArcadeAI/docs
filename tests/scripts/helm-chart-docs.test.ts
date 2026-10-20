import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { compile } from "@mdx-js/mdx";
import { describe, expect, it } from "vitest";
import {
  escapeMdx,
  extractValuesSection,
  readValuesMarkdown,
  syncHelmChartDocs,
} from "../../scripts/lib/helm-chart-docs";

const README = `# arcade

Intro.

<!-- BEGIN GENERATED VALUES (helm-docs) -->
| Key | Default |
|-----|---------|
| a | \`1\` |
<!-- END GENERATED VALUES -->

Footer.
`;

function makeChart(files: Record<string, string>): string {
  const dir = mkdtempSync(join(tmpdir(), "helm-chart-"));
  for (const [name, content] of Object.entries(files)) {
    const path = join(dir, name);
    mkdirSync(join(path, ".."), { recursive: true });
    writeFileSync(path, content);
  }
  return dir;
}

describe("extractValuesSection", () => {
  it("returns the text between markers, markers excluded", () => {
    expect(extractValuesSection(README)).toBe(
      "| Key | Default |\n|-----|---------|\n| a | `1` |"
    );
  });

  it("returns null when markers are missing or unterminated", () => {
    expect(extractValuesSection("# arcade\n")).toBeNull();
    expect(
      extractValuesSection("<!-- BEGIN GENERATED VALUES -->\nx\n")
    ).toBeNull();
  });
});

describe("readValuesMarkdown", () => {
  it("prefers the README section", () => {
    const dir = makeChart({ "README.md": README, "values.md": "old" });
    expect(readValuesMarkdown(dir)).toContain("| a |");
  });

  it("falls back to values.md when markers are missing", () => {
    const dir = makeChart({ "README.md": "# arcade", "values.md": "legacy\n" });
    expect(readValuesMarkdown(dir)).toBe("legacy");
  });

  it("throws when there is neither markers nor values.md", () => {
    const dir = makeChart({ "README.md": "# arcade" });
    expect(() => readValuesMarkdown(dir)).toThrow("GENERATED VALUES");
  });
});

describe("escapeMdx", () => {
  it("escapes braces and angle brackets outside code", () => {
    expect(escapeMdx("a {b} <c>")).toBe("a \\{b\\} \\<c>");
  });

  it("leaves code spans and fences untouched", () => {
    expect(escapeMdx("`{x}` and {y}")).toBe("`{x}` and \\{y\\}");
    expect(escapeMdx("```yaml\na: {b}\n```")).toBe("```yaml\na: {b}\n```");
  });

  it("keeps <br>, drops comments, unwraps autolinks", () => {
    expect(escapeMdx("a<br>b<br/>c <!-- x --> <https://e.com>")).toBe(
      "a<br />b<br />c  https://e.com"
    );
  });

  it("produces output MDX can compile", async () => {
    const input = [
      '| `k` | <pre>{ "a": 1 }</pre> {{ .Values }} <br> |',
      "|---|---|",
      "| x | a < b |",
    ].join("\n");
    await expect(compile(escapeMdx(input))).resolves.toBeDefined();
  });
});

describe("syncHelmChartDocs", () => {
  it("writes the page, raw values, and examples", async () => {
    const chartDir = makeChart({
      "README.md": README,
      "examples/small.yaml": "a: 1\n",
      "examples/notes.txt": "skip",
    });
    const docsDir = mkdtempSync(join(tmpdir(), "helm-docs-"));
    const archiveDir = mkdtempSync(join(tmpdir(), "helm-archive-"));
    const result = syncHelmChartDocs({
      archiveDir,
      chartDir,
      docsDir,
      version: "1.12.0",
    });

    expect(result.exampleCount).toBe(1);
    expect(
      readFileSync(join(archiveDir, "1.12.0/values.md"), "utf-8")
    ).toContain("| a |");
    expect(
      readFileSync(join(archiveDir, "1.12.0/examples/small.yaml"), "utf-8")
    ).toBe("a: 1\n");
    const page = readFileSync(join(docsDir, "values-reference.mdx"), "utf-8");
    expect(page).toContain("chart version `1.12.0`");
    await expect(compile(page)).resolves.toBeDefined();
  });

  it("treats zero examples as fine and rejects bad versions", () => {
    const chartDir = makeChart({ "README.md": README });
    const docsDir = mkdtempSync(join(tmpdir(), "helm-docs-"));
    const archiveDir = mkdtempSync(join(tmpdir(), "helm-archive-"));
    expect(
      syncHelmChartDocs({ archiveDir, chartDir, docsDir, version: "1.12.0" })
        .exampleCount
    ).toBe(0);
    expect(() =>
      syncHelmChartDocs({ archiveDir, chartDir, docsDir, version: "../x" })
    ).toThrow("Invalid version");
  });
});
