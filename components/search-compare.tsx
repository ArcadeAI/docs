"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { useEffect, useState } from "react";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

const searchClient =
  appId && searchKey ? algoliasearch(appId, searchKey) : null;

const EXAMPLES = [
  "api key",
  "gmial",
  "slakc",
  "Gmail.SendEmail",
  "send email",
  "on prem",
  "cli",
  "how to deploy my mcp server",
];

const DEBOUNCE_MS = 200;

type Result = {
  key: string;
  title: string;
  section?: string;
  url: string;
};

type Outcome = {
  results: Result[];
  ms: number;
  error?: string;
};

type AlgoliaHit = {
  objectID: string;
  url: string;
  hierarchy?: Record<string, string | null>;
};

type BuiltinHit = {
  id: string;
  url: string;
  content: string;
};

function toPath(url: string): string {
  try {
    const parsed = new URL(url, "https://docs.arcade.dev");
    return parsed.pathname + parsed.hash;
  } catch {
    return url;
  }
}

async function searchAlgolia(query: string): Promise<Outcome> {
  if (!(searchClient && indexName)) {
    return { results: [], ms: 0, error: "Algolia env vars are not set." };
  }
  const start = performance.now();
  const { results } = await searchClient.searchForHits<AlgoliaHit>({
    requests: [{ indexName, query, hitsPerPage: 15, distinct: true }],
  });
  const hits = results[0]?.hits ?? [];
  return {
    ms: Math.round(performance.now() - start),
    results: hits.map((hit) => {
      const h = hit.hierarchy ?? {};
      const section = ["lvl1", "lvl2", "lvl3"]
        .map((lvl) => h[lvl])
        .filter(Boolean)
        .join(" › ");
      return {
        key: hit.objectID,
        title: h.lvl0 ?? "Untitled",
        section: section || undefined,
        url: toPath(hit.url),
      };
    }),
  };
}

async function searchBuiltin(
  query: string,
  signal: AbortSignal
): Promise<Outcome> {
  const start = performance.now();
  const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`, {
    signal,
  });
  if (!res.ok) {
    return { results: [], ms: 0, error: `Request failed (${res.status}).` };
  }
  const hits = (await res.json()) as BuiltinHit[];
  return {
    ms: Math.round(performance.now() - start),
    results: hits.map((hit) => ({
      key: hit.id,
      title: hit.content.replace(/<\/?mark>/g, ""),
      url: toPath(hit.url),
    })),
  };
}

function ResultColumn({
  label,
  note,
  outcome,
}: {
  label: string;
  note: string;
  outcome: Outcome | null;
}) {
  return (
    <section className="min-w-0 rounded-xl border border-border">
      <header className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold">{label}</h2>
          <p className="text-xs text-muted-foreground">{note}</p>
        </div>
        {outcome && !outcome.error && (
          <span className="shrink-0 text-xs text-muted-foreground">
            {outcome.results.length} results · {outcome.ms} ms
          </span>
        )}
      </header>
      <ol className="space-y-0.5 p-2">
        {outcome?.error && (
          <li className="px-3 py-6 text-center text-sm text-muted-foreground">
            {outcome.error}
          </li>
        )}
        {outcome && !outcome.error && outcome.results.length === 0 && (
          <li className="px-3 py-6 text-center text-sm text-muted-foreground">
            No results
          </li>
        )}
        {outcome?.results.map((result, i) => (
          <li key={result.key}>
            <a
              className="flex gap-3 rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-white/5"
              href={result.url}
            >
              <span className="w-5 shrink-0 text-right text-xs text-muted-foreground tabular-nums">
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">
                  {result.title}
                </span>
                {result.section && (
                  <span className="block truncate text-xs text-muted-foreground">
                    {result.section}
                  </span>
                )}
                <span className="block truncate text-xs text-muted-foreground/70">
                  {result.url}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function SearchCompare() {
  const [query, setQuery] = useState("");
  const [algolia, setAlgolia] = useState<Outcome | null>(null);
  const [builtin, setBuiltin] = useState<Outcome | null>(null);

  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("q");
    if (initial) {
      setQuery(initial);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (query) {
      url.searchParams.set("q", query);
    } else {
      url.searchParams.delete("q");
    }
    window.history.replaceState(null, "", url);

    if (!query.trim()) {
      setAlgolia(null);
      setBuiltin(null);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => {
      searchAlgolia(query)
        .then((outcome) => {
          if (!controller.signal.aborted) {
            setAlgolia(outcome);
          }
        })
        .catch((error: unknown) => {
          if (!controller.signal.aborted) {
            setAlgolia({ results: [], ms: 0, error: String(error) });
          }
        });
      searchBuiltin(query, controller.signal)
        .then(setBuiltin)
        .catch((error: unknown) => {
          if (!controller.signal.aborted) {
            setBuiltin({ results: [], ms: 0, error: String(error) });
          }
        });
    }, DEBOUNCE_MS);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="mt-6">
      <input
        aria-label="Search query"
        className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-foreground/40"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type a query to compare both engines…"
        type="search"
        value={query}
      />
      <div className="mt-3 flex flex-wrap gap-2">
        {EXAMPLES.map((example) => (
          <button
            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:bg-neutral-100 hover:text-foreground dark:hover:bg-white/5"
            key={example}
            onClick={() => setQuery(example)}
            type="button"
          >
            {example}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <ResultColumn
          label="Algolia"
          note="Live index, what the site uses today"
          outcome={algolia}
        />
        <ResultColumn
          label="Fumadocs built-in (ZBSearch)"
          note="Page-level, title boost, stemming, 2 typos"
          outcome={builtin}
        />
      </div>
    </div>
  );
}
