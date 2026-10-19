import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const BEGIN_MARKER = "<!-- BEGIN GENERATED VALUES";
const END_MARKER = "<!-- END GENERATED VALUES -->";

// Same pattern as update-design-system-dependency.yml.
const VERSION_REGEX = /^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$/;
const FENCE_REGEX = /^\s*(```|~~~)/;
const CODE_SPAN_REGEX = /(`+)(?!`)[\s\S]*?(?<!`)\1(?!`)/g;
const HTML_COMMENT_REGEX = /<!--[\s\S]*?-->/g;
const AUTOLINK_REGEX = /<(https?:\/\/[^>\s]+)>/g;
const BR_REGEX = /<br\s*\/?>/gi;
const MDX_SPECIAL_REGEX = /[{}<]/g;
const YAML_FILE_REGEX = /\.ya?ml$/;

export function isValidVersion(version: string): boolean {
  return VERSION_REGEX.test(version);
}

/**
 * Returns the Markdown between the generated-values markers (markers
 * excluded), or null when either marker is missing.
 */
export function extractValuesSection(readme: string): string | null {
  const lines = readme.split(/\r?\n/);
  const begin = lines.findIndex((line) => line.startsWith(BEGIN_MARKER));
  if (begin === -1) {
    return null;
  }
  const end = lines.findIndex(
    (line, index) => index > begin && line.trim() === END_MARKER
  );
  if (end === -1) {
    return null;
  }
  return lines
    .slice(begin + 1, end)
    .join("\n")
    .trim();
}

/**
 * Reads the values reference from an unpacked chart: the README section
 * first, then a top-level values.md. Throws when neither exists.
 */
export function readValuesMarkdown(chartDir: string): string {
  const readmePath = join(chartDir, "README.md");
  if (existsSync(readmePath)) {
    const section = extractValuesSection(readFileSync(readmePath, "utf-8"));
    if (section) {
      return section;
    }
  }
  const valuesPath = join(chartDir, "values.md");
  if (existsSync(valuesPath)) {
    return readFileSync(valuesPath, "utf-8").trim();
  }
  throw new Error(
    "Chart has no generated values reference: README.md lacks the BEGIN/END GENERATED VALUES markers and there is no top-level values.md. Published chart versions up to 1.11.2 predate the generated reference."
  );
}

function escapeLine(line: string): string {
  const escapePlain = (text: string) =>
    text
      .replace(HTML_COMMENT_REGEX, "")
      .replace(AUTOLINK_REGEX, "$1")
      .replace(BR_REGEX, "\u0000")
      .replace(MDX_SPECIAL_REGEX, (char) => `\\${char}`)
      .replaceAll("\u0000", "<br />");

  let result = "";
  let last = 0;
  for (const match of line.matchAll(CODE_SPAN_REGEX)) {
    result += escapePlain(line.slice(last, match.index));
    result += match[0];
    last = match.index + match[0].length;
  }
  return result + escapePlain(line.slice(last));
}

/**
 * Makes helm-docs Markdown safe for MDX: escapes `{`, `}`, and `<` outside
 * code spans and fences, keeps `<br>` as valid JSX, and drops HTML comments.
 */
export function escapeMdx(markdown: string): string {
  let inFence = false;
  return markdown
    .split("\n")
    .map((line) => {
      if (FENCE_REGEX.test(line)) {
        inFence = !inFence;
        return line;
      }
      return inFence ? line : escapeLine(line);
    })
    .join("\n");
}

export function renderValuesPage(version: string, markdown: string): string {
  return `---
title: Helm values reference
sidebarTitle: Values reference
description: Every configurable value in the Arcade Helm chart, generated from chart version ${version}
---

This reference is generated from Arcade Helm chart version \`${version}\`.

Set these values in a \`values.yaml\` file, or pass them with \`--set\`, when you install or upgrade the chart. For installation steps, see [Self-host Arcade with Helm](/en/operate/deploy/helm).

${escapeMdx(markdown)}
`;
}

export type SyncResult = {
  exampleCount: number;
};

export function syncHelmChartDocs(options: {
  archiveDir: string;
  chartDir: string;
  docsDir: string;
  version: string;
}): SyncResult {
  const { archiveDir, chartDir, docsDir, version } = options;
  if (!isValidVersion(version)) {
    throw new Error(`Invalid version: ${version}`);
  }
  const markdown = readValuesMarkdown(chartDir);

  const versionDir = join(archiveDir, version);
  mkdirSync(versionDir, { recursive: true });
  writeFileSync(join(versionDir, "values.md"), `${markdown}\n`);

  const examplesDir = join(versionDir, "examples");
  rmSync(examplesDir, { recursive: true, force: true });
  const sourceExamples = join(chartDir, "examples");
  const examples = existsSync(sourceExamples)
    ? readdirSync(sourceExamples).filter((name) => YAML_FILE_REGEX.test(name))
    : [];
  if (examples.length > 0) {
    mkdirSync(examplesDir, { recursive: true });
    for (const name of examples) {
      copyFileSync(join(sourceExamples, name), join(examplesDir, name));
    }
  }

  mkdirSync(docsDir, { recursive: true });
  writeFileSync(
    join(docsDir, "values-reference.mdx"),
    renderValuesPage(version, markdown)
  );

  return { exampleCount: examples.length };
}
