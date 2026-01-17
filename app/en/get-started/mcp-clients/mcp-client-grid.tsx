"use client";
import Link from "next/link";
import meta from "./_meta";

// MCP Client data with logos and descriptions
const mcpClients = [
  {
    key: "cursor",
    name: "Cursor",
    description: "AI-powered code editor with built-in MCP support",
    invertInLight: true,
  },
  {
    key: "claude-desktop",
    name: "Claude Desktop",
    description: "Anthropic's desktop app for Claude with MCP integration",
    invertInLight: true,
  },
  {
    key: "visual-studio-code",
    name: "Visual Studio Code",
    description: "Microsoft's code editor with MCP extensions",
  },
];

// Logo mapping
const logoSrc = {
  cursor: "/images/icons/cursor.png",
  "claude-desktop": "/images/icons/claude.png",
  "visual-studio-code": "/images/icons/vscode.svg",
};

export function MCPClientGrid() {
  const subpages = Object.entries(meta).filter(([key]) => key !== "index");

  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3">
      {mcpClients.map((client) => {
        const clientMeta = subpages.find(([key]) => key === client.key);
        if (!clientMeta) {
          return null;
        }

        return (
          <Link
            href={`/guides/tool-calling/mcp-clients/${client.key}`}
            key={client.key}
          >
            <div className="flex h-full flex-col gap-1.5 rounded-xl border border-blue-600/20 bg-blue-600/[0.02] py-3 text-card-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-blue-600/[0.03] hover:shadow-lg dark:bg-gray-900/80">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center space-x-5">
                    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                      <img
                        alt={`${client.name} logo`}
                        className={`size-9 object-contain ${client.invertInLight ? "invert dark:invert-0" : ""}`}
                        height={36}
                        src={logoSrc[client.key as keyof typeof logoSrc]}
                        width={36}
                      />
                    </div>
                    <div>
                      <div className="mb-0.5 font-semibold text-base text-gray-900 dark:text-gray-50">
                        {client.name}
                      </div>
                      <div className="text-gray-600 text-xs dark:text-gray-400">
                        {client.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
