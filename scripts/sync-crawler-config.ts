#!/usr/bin/env npx tsx

/**
 * Push algolia/crawler-config.js to the Algolia Crawler, then trigger a reindex.
 *
 * Usage:
 *   pnpm sync-crawler-config
 *
 * `PATCH /1/crawlers/{id}/config` is a top-level merge, so this only sends the
 * fields we manage. We deliberately do NOT send `apiKey`: the crawler's index
 * write key stays whatever it is in the Algolia dashboard and is never touched
 * here (the config file doesn't store it either). Updating config doesn't crawl
 * on its own, so we POST /reindex afterwards to apply the new config.
 *
 * Requires these env vars (provided as CI secrets/variables):
 *   ALGOLIA_CRAWLER_ID
 *   ALGOLIA_CRAWLER_USER_ID
 *   ALGOLIA_CRAWLER_API_KEY
 */

import { Buffer } from "node:buffer";
import { crawlerConfig } from "../algolia/crawler-config.js";

const CRAWLER_ID = process.env.ALGOLIA_CRAWLER_ID;
const USER_ID = process.env.ALGOLIA_CRAWLER_USER_ID;
const API_KEY = process.env.ALGOLIA_CRAWLER_API_KEY;

if (!(CRAWLER_ID && USER_ID && API_KEY)) {
  console.error(
    "Missing ALGOLIA_CRAWLER_ID, ALGOLIA_CRAWLER_USER_ID, or ALGOLIA_CRAWLER_API_KEY."
  );
  process.exit(1);
}

const API_BASE = "https://crawler.algolia.com/api/1";
const authHeader = `Basic ${Buffer.from(`${USER_ID}:${API_KEY}`).toString("base64")}`;

// The Crawler API stores recordExtractor as { __type: "function", source }, so
// serialize each action's function to its source string. Spreading crawlerConfig
// keeps every other managed field (schedule, sitemaps, actions, settings, …);
// appId is a harmless no-op in a merge and apiKey is intentionally absent.
const payload = {
  ...crawlerConfig,
  actions: crawlerConfig.actions.map((action) => ({
    ...action,
    recordExtractor: {
      __type: "function",
      source: action.recordExtractor.toString(),
    },
  })),
};

const configResponse = await fetch(`${API_BASE}/crawlers/${CRAWLER_ID}/config`, {
  method: "PATCH",
  headers: { Authorization: authHeader, "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

if (!configResponse.ok) {
  console.error(
    `Config update failed (${configResponse.status}): ${await configResponse.text()}`
  );
  process.exit(1);
}
console.log("Crawler config updated.");

if (process.env.SKIP_REINDEX === "true") {
  console.log("Skipping reindex — will be triggered after deployment.");
  process.exit(0);
}

const reindexResponse = await fetch(
  `${API_BASE}/crawlers/${CRAWLER_ID}/reindex`,
  { method: "POST", headers: { Authorization: authHeader } }
);

if (!reindexResponse.ok) {
  console.error(
    `Reindex failed (${reindexResponse.status}): ${await reindexResponse.text()}`
  );
  process.exit(1);
}

const { taskId } = (await reindexResponse.json()) as { taskId: string };
console.log(`Reindex triggered (taskId: ${taskId}).`);
