import upstreamDates from "@/data/upstream-last-modified.json";

/**
 * Pages imported from the Nextra repo keep the "Last updated on" date they had
 * there: this repo's git history starts at the import, so its own dates would
 * all read as the import day. `data/upstream-last-modified.json` holds each
 * page's date as production displayed it at the moment of the import.
 *
 * A page edited after the import has a later commit here, and that date wins.
 */
const IMPORTED_AT = Date.parse("2026-10-14T00:00:00Z");

const UPSTREAM_DATES: Record<string, number> = upstreamDates;

export function pageLastModified(
  contentPath: string,
  gitDate: string | null
): string | null {
  const upstream = UPSTREAM_DATES[contentPath];
  if (upstream === undefined) {
    return gitDate;
  }
  if (gitDate && Date.parse(gitDate) > IMPORTED_AT) {
    return gitDate;
  }
  return new Date(upstream).toISOString();
}

/**
 * Toolkit pages are generated from data, so no content file carries their
 * date. Production dates them all by its single dynamic route file; this is
 * that date at the moment of the import.
 */
const TOOLKIT_PAGES_UPDATED_AT = Date.parse("2026-10-06T20:56:16Z");

export function toolkitPageLastModified(): string {
  return new Date(TOOLKIT_PAGES_UPDATED_AT).toISOString();
}
