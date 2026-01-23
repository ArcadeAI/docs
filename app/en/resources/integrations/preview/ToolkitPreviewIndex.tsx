import Link from "next/link";
import { readToolkitIndex } from "@/app/_lib/toolkit-data";

const AUTH_TYPE_STYLES: Record<string, string> = {
  oauth2: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  api_key: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  mixed: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  none: "bg-green-500/10 text-green-400 border-green-500/30",
};

const AUTH_TYPE_LABELS: Record<string, string> = {
  oauth2: "OAuth",
  api_key: "API Key",
  mixed: "Mixed",
  none: "None",
};

export async function ToolkitPreviewIndex() {
  const index = await readToolkitIndex();

  if (!index) {
    return (
      <div className="rounded-xl border border-neutral-dark-high/50 bg-neutral-dark/30 p-8 text-center">
        <p className="text-muted-foreground">
          No toolkit index found. Run the generator first.
        </p>
      </div>
    );
  }

  const groupedByCategory = index.toolkits.reduce(
    (acc, toolkit) => {
      const category = toolkit.category || "other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(toolkit);
      return acc;
    },
    {} as Record<string, typeof index.toolkits>
  );

  const categories = Object.keys(groupedByCategory).sort();

  return (
    <div className="mt-8 space-y-10">
      <div className="flex items-center justify-between rounded-lg border border-neutral-dark-high/50 bg-neutral-dark/30 px-4 py-3">
        <span className="text-sm text-muted-foreground">
          <strong className="text-text-color">{index.toolkits.length}</strong> toolkits generated
        </span>
        <span className="text-xs text-muted-foreground">
          {new Date(index.generatedAt).toLocaleString()}
        </span>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold capitalize">
            <span className="h-1 w-1 rounded-full bg-brand-accent" />
            {category.replace(/-/g, " ")}
            <span className="rounded-full bg-neutral-dark-medium px-2 py-0.5 text-xs font-normal text-muted-foreground">
              {groupedByCategory[category].length}
            </span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {groupedByCategory[category]
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((toolkit) => (
                <Link
                  key={toolkit.id}
                  href={`/en/resources/integrations/preview/${toolkit.id.toLowerCase()}`}
                  className="group flex flex-col rounded-xl border border-neutral-dark-high/50 bg-gradient-to-br from-neutral-dark/40 to-transparent p-4 transition-all hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-medium text-text-color group-hover:text-brand-accent transition-colors">
                      {toolkit.label}
                    </span>
                    <code className="shrink-0 rounded bg-neutral-dark-medium px-1.5 py-0.5 text-xs text-muted-foreground">
                      v{toolkit.version}
                    </code>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full bg-neutral-dark-medium px-2 py-0.5 text-xs text-muted-foreground">
                      {toolkit.toolCount} tools
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs ${
                        AUTH_TYPE_STYLES[toolkit.authType] || AUTH_TYPE_STYLES.none
                      }`}
                    >
                      {AUTH_TYPE_LABELS[toolkit.authType] || toolkit.authType}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
