import { describe, expect, it } from "vitest";
import { cleanMdxToMarkdown } from "../app/_lib/clean-mdx";

describe("cleanMdxToMarkdown", () => {
  it("strips YAML frontmatter", () => {
    const input = `---
title: "My Page"
description: "A description"
---

# Hello`;
    expect(cleanMdxToMarkdown(input)).toBe("# Hello");
  });

  it("strips import statements", () => {
    const input = `import { Steps, Tabs } from "nextra/components";
import { SignupLink } from "@/app/_components/analytics";

# Getting started`;
    expect(cleanMdxToMarkdown(input)).toBe("# Getting started");
  });

  it("strips export statements", () => {
    const input = `export const metadata = { title: "Page" };

# Content here`;
    expect(cleanMdxToMarkdown(input)).toBe("# Content here");
  });

  it("strips self-closing JSX tags", () => {
    const input = `# Title

<SignupLink linkLocation="docs" />

Some text.`;
    expect(cleanMdxToMarkdown(input)).toBe("# Title\n\nSome text.");
  });

  it("strips opening and closing JSX tags but keeps inner text", () => {
    const input = `<Callout type="info">
This is important information.
</Callout>`;
    expect(cleanMdxToMarkdown(input)).toBe("This is important information.");
  });

  it("strips nested JSX wrapper components", () => {
    const input = `<Steps>

### Step 1
Do something.

### Step 2
Do something else.

</Steps>`;
    const result = cleanMdxToMarkdown(input);
    expect(result).toContain("### Step 1");
    expect(result).toContain("### Step 2");
    expect(result).not.toContain("<Steps>");
    expect(result).not.toContain("</Steps>");
  });

  it("strips Tabs and Tabs.Tab components", () => {
    const input = `<Tabs items={["Python", "TypeScript"]}>

<Tabs.Tab>
Python code here.
</Tabs.Tab>

<Tabs.Tab>
TypeScript code here.
</Tabs.Tab>

</Tabs>`;
    const result = cleanMdxToMarkdown(input);
    expect(result).toContain("Python code here.");
    expect(result).toContain("TypeScript code here.");
    expect(result).not.toContain("<Tabs");
    expect(result).not.toContain("</Tabs>");
  });

  it("strips HTML div/span/video tags", () => {
    const input = `<div className="flex justify-center my-4">
  <video src="/videos/demo.mp4" autoPlay muted></video>
</div>

Some text after.`;
    const result = cleanMdxToMarkdown(input);
    expect(result).not.toContain("<div");
    expect(result).not.toContain("<video");
    expect(result).toContain("Some text after.");
  });

  it("preserves standard markdown", () => {
    const input = `# Heading

A paragraph with **bold** and *italic*.

- List item 1
- List item 2

\`\`\`python
print("hello")
\`\`\`

[A link](https://example.com)

> A blockquote`;
    const result = cleanMdxToMarkdown(input);
    expect(result).toBe(input);
  });

  it("preserves code blocks with JSX-like content inside", () => {
    const input = `# Example

\`\`\`tsx
<MyComponent prop="value" />
\`\`\``;
    const result = cleanMdxToMarkdown(input);
    expect(result).toContain('<MyComponent prop="value" />');
  });

  it("collapses excessive blank lines", () => {
    const input = `# Title



Some text.




More text.`;
    const result = cleanMdxToMarkdown(input);
    expect(result).toBe("# Title\n\nSome text.\n\nMore text.");
  });

  it("handles a realistic MDX page", () => {
    const input = `---
title: "Getting Your API Key"
description: "Learn how to obtain and manage your Arcade API key"
---

import { Steps, Tabs, Callout } from "nextra/components";
import { SignupLink } from "@/app/_components/analytics";

# Getting Your API Key

Before you begin, you'll need an Arcade account.

<Tabs items={["Dashboard", "CLI"]}>

<Tabs.Tab>

### Using the Dashboard

<Steps>
### Navigate to API Keys page
Visit the API Keys page in Arcade Dashboard.

### Create a new API key

1. Click the \`Create API Key\` button
2. Enter a descriptive name
3. Click \`Create API Key\` to generate
</Steps>

</Tabs.Tab>

</Tabs>`;
    const result = cleanMdxToMarkdown(input);
    expect(result).not.toContain("import");
    expect(result).not.toContain("---");
    expect(result).not.toContain("<Tabs");
    expect(result).not.toContain("<Steps>");
    expect(result).toContain("# Getting Your API Key");
    expect(result).toContain("Before you begin");
    expect(result).toContain("### Using the Dashboard");
    expect(result).toContain("### Navigate to API Keys page");
    expect(result).toContain("1. Click the `Create API Key` button");
  });

  it("returns empty string for empty input", () => {
    expect(cleanMdxToMarkdown("")).toBe("");
  });

  it("returns trimmed content for whitespace-only input", () => {
    expect(cleanMdxToMarkdown("   \n\n  ")).toBe("");
  });
});
