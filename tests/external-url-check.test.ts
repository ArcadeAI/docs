import { readFileSync } from "node:fs";
import fg from "fast-glob";
import { expect, test } from "vitest";

const TIMEOUT = 120_000;
const CONCURRENCY = 10;
const REQUEST_TIMEOUT = 8000;

const SKIP_PATTERNS: RegExp[] = [
  // Placeholder / example domains
  /example\.(com|org|net)/,
  /\.example\b/,
  /localhost/,
  /127\.0\.0\.1/,
  /[{<]/,
  /\.ngrok-free\.app/,
  /salesforce-org-subdomain/,
  /acme-inc[.-]/,
  /d3v-/,

  // Requires authentication (dashboard is a SPA behind login)
  /api\.arcade\.dev/,

  // Sites that block automated / bot requests
  /discord\.gg/,
  /reddit\.com/,
  /platform\.openai\.com/,
  /support\.google\.com/,
  /developers\.google\.com/,
  /developer\.squareup\.com/,
  /developer\.ticktick\.com/,
  /api-console\.zoho\.com/,
  /zoho\.com\/creator\/help/,
  /support\.zendesk\.com/,
  /mastra\.ai\/docs/,
  /docs\.langchain\.com/,
];

function shouldSkip(url: string): boolean {
  return SKIP_PATTERNS.some((re) => re.test(url));
}

function stripCodeBlocks(source: string): string {
  let result = source.replace(/```[\s\S]*?```/g, "");
  result = result.replace(/`[^`]+`/g, "");
  return result;
}

function extractExternalUrls(content: string): string[] {
  const urls: string[] = [];

  const mdLinkRe = /\[(?:[^\]]*)\]\((https?:\/\/[^)]+)\)/g;
  let match: RegExpExecArray | null;
  match = mdLinkRe.exec(content);
  while (match !== null) {
    urls.push(match[1]);
    match = mdLinkRe.exec(content);
  }

  const hrefRe = /href=["'](https?:\/\/[^"']+)["']/g;
  match = hrefRe.exec(content);
  while (match !== null) {
    urls.push(match[1]);
    match = hrefRe.exec(content);
  }

  return urls;
}

async function checkUrl(
  url: string
): Promise<{ ok: boolean; status?: number; error?: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    let res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
    });

    if (res.status === 405 || res.status === 403) {
      const controller2 = new AbortController();
      const timer2 = setTimeout(() => controller2.abort(), REQUEST_TIMEOUT);
      try {
        res = await fetch(url, {
          method: "GET",
          signal: controller2.signal,
          redirect: "follow",
        });
      } finally {
        clearTimeout(timer2);
      }
    }

    if (res.status === 429 || (res.status >= 200 && res.status < 400)) {
      return { ok: true };
    }

    return { ok: false, status: res.status };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: message };
  } finally {
    clearTimeout(timer);
  }
}

function pLimit(concurrency: number) {
  let active = 0;
  const queue: Array<() => void> = [];

  function next() {
    if (queue.length > 0 && active < concurrency) {
      active += 1;
      const run = queue.shift();
      if (run) {
        run();
      }
    }
  }

  return <T>(fn: () => Promise<T>): Promise<T> =>
    new Promise<T>((resolve, reject) => {
      queue.push(() => {
        fn()
          .then(resolve, reject)
          .finally(() => {
            active -= 1;
            next();
          });
      });
      next();
    });
}

test(
  "external URLs are reachable",
  async () => {
    const files = await fg("app/**/*.mdx", { cwd: process.cwd() });
    const urlMap = new Map<string, Set<string>>();

    for (const file of files) {
      const raw = readFileSync(file, "utf-8");
      const content = stripCodeBlocks(raw);
      const urls = extractExternalUrls(content);

      for (const url of urls) {
        if (shouldSkip(url)) {
          continue;
        }
        const existing = urlMap.get(url);
        if (existing) {
          existing.add(file);
        } else {
          urlMap.set(url, new Set([file]));
        }
      }
    }

    console.log(`Found ${urlMap.size} unique external URLs to check`);

    const limit = pLimit(CONCURRENCY);
    const failures: Array<{
      url: string;
      status?: number;
      error?: string;
      files: string[];
    }> = [];

    const checks = [...urlMap.entries()].map(([url, sources]) =>
      limit(async () => {
        console.log(`Checking: ${url}`);
        const result = await checkUrl(url);
        if (!result.ok) {
          failures.push({
            url,
            status: result.status,
            error: result.error,
            files: [...sources],
          });
        }
      })
    );

    await Promise.all(checks);

    for (const failure of failures) {
      console.error(
        `Broken external URL: ${failure.url}` +
          (failure.status ? ` (HTTP ${failure.status})` : "") +
          (failure.error ? ` (${failure.error})` : "") +
          ` — found in: ${failure.files.join(", ")}`
      );
    }

    expect(failures).toEqual([]);
  },
  TIMEOUT
);
