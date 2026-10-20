// Display titles for the MCP client pages, keyed by page slug.
const meta: Record<string, { title?: string }> = {
  "claude-code": {
    title: "Claude Code",
  },
  "claude-desktop": {
    title: "Claude Desktop",
  },
  "copilot-studio": {
    title: "Microsoft Copilot Studio",
  },
  cursor: {
    title: "Cursor",
  },
  "github-copilot": {
    title: "GitHub Copilot",
  },
  index: {
    title: "Overview",
  },
  "visual-studio-code": {
    title: "Visual Studio Code",
  },
};

export default meta;
