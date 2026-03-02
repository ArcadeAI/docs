import { describe, expect, it } from "vitest";
import {
  extractFrontmatterTitle,
  stripMdxSyntax,
} from "../scripts/pagefind-helpers";

describe("extractFrontmatterTitle", () => {
  it("extracts a double-quoted title from frontmatter", () => {
    const mdx = `---\ntitle: "My Page"\n---\n\n# Content`;
    expect(extractFrontmatterTitle(mdx)).toBe("My Page");
  });

  it("extracts a single-quoted title from frontmatter", () => {
    const mdx = `---\ntitle: 'My Page'\n---\n\n# Content`;
    expect(extractFrontmatterTitle(mdx)).toBe("My Page");
  });

  it("extracts an unquoted title from frontmatter", () => {
    const mdx = "---\ntitle: My Page\n---\n\n# Content";
    expect(extractFrontmatterTitle(mdx)).toBe("My Page");
  });

  it("returns undefined when there is no frontmatter", () => {
    const mdx = "# My Page\n\nSome content here.";
    expect(extractFrontmatterTitle(mdx)).toBeUndefined();
  });

  it("returns undefined when frontmatter has no title field", () => {
    const mdx = `---\ndescription: "A page"\n---\n\n# My Page`;
    expect(extractFrontmatterTitle(mdx)).toBeUndefined();
  });

  it("ignores other frontmatter fields when extracting title", () => {
    const mdx = `---\ndescription: "Something"\ntitle: "Real Title"\nauthor: "Alice"\n---`;
    expect(extractFrontmatterTitle(mdx)).toBe("Real Title");
  });
});

describe("stripMdxSyntax", () => {
  it("removes YAML frontmatter", () => {
    const mdx = `---\ntitle: "My Page"\n---\n\n# Hello`;
    expect(stripMdxSyntax(mdx)).toBe("# Hello");
  });

  it("removes import statements", () => {
    const mdx = `import Foo from './foo'\n\n# Hello`;
    expect(stripMdxSyntax(mdx)).toBe("# Hello");
  });

  it("removes export statements", () => {
    const mdx = "export const meta = {}\n\n# Hello";
    expect(stripMdxSyntax(mdx)).toBe("# Hello");
  });

  it("removes multiple imports and exports", () => {
    const mdx = `import Foo from './foo'\nimport { Bar } from './bar'\nexport const x = 1\n\n# Hello\n\nContent.`;
    expect(stripMdxSyntax(mdx)).toBe("# Hello\n\nContent.");
  });

  it("keeps regular markdown content intact", () => {
    const mdx =
      "# Hello\n\nSome **bold** and _italic_ text.\n\n- item 1\n- item 2";
    expect(stripMdxSyntax(mdx)).toBe(
      "# Hello\n\nSome **bold** and _italic_ text.\n\n- item 1\n- item 2"
    );
  });

  it("handles content with no MDX syntax", () => {
    const mdx = "# Plain Markdown\n\nJust text.";
    expect(stripMdxSyntax(mdx)).toBe("# Plain Markdown\n\nJust text.");
  });

  it("strips both frontmatter and imports together", () => {
    const mdx = `---\ntitle: "Test"\n---\nimport Foo from './foo'\n\n# Hello`;
    expect(stripMdxSyntax(mdx)).toBe("# Hello");
  });
});
