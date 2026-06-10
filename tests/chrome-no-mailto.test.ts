import { readFileSync } from "node:fs";
import fg from "fast-glob";
import { expect, test } from "vitest";

const TIMEOUT = 30_000;

// Raw email links (mailto:) and Cloudflare's obfuscated email endpoint.
const FORBIDDEN = /mailto:|\/cdn-cgi\/l\/email-protection/gi;
// Comment forms to blank out before scanning (block/JSX `/* */` and line `//`).
const BLOCK_COMMENT = /\/\*[\s\S]*?\*\//g;
const LINE_COMMENT = /(^|[^:])\/\/.*$/;
const NON_NEWLINE = /[^\n]/g;

/**
 * Shared components in app/_components (footer, navbar, etc.) render on every
 * page. A raw email link in sitewide chrome gets rewritten by Cloudflare Email
 * Obfuscation into a /cdn-cgi/l/email-protection link that returns 404 to
 * crawlers. That single sitewide link previously produced ~229 "Page has links
 * to broken page" errors in the Ahrefs audit and was the largest drag on the
 * docs health score (MARTECH-16).
 *
 * Link to the internal /en/resources/contact-us page instead of exposing an
 * address. In-content email links on individual pages are fine (and are not
 * scanned here) — the failure mode is specifically email in sitewide chrome.
 */
test(
  "shared components contain no mailto: or email-protection links",
  async () => {
    const files = await fg("app/_components/**/*.{ts,tsx}");
    const offenders: Array<{ file: string; line: number; match: string }> = [];

    for (const file of files) {
      // Blank out comments (so explanatory prose mentioning these patterns is
      // not flagged) while preserving newlines to keep line numbers accurate.
      const content = readFileSync(file, "utf-8").replace(BLOCK_COMMENT, (m) =>
        m.replace(NON_NEWLINE, " ")
      );
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i += 1) {
        const code = lines[i].replace(LINE_COMMENT, "$1");
        const matches = code.match(FORBIDDEN);
        if (matches) {
          for (const match of matches) {
            offenders.push({ file, line: i + 1, match });
          }
        }
      }
    }

    for (const offender of offenders) {
      console.error(
        `Forbidden sitewide email link in ${offender.file}:${offender.line} — "${offender.match}". ` +
          "Cloudflare rewrites sitewide email into /cdn-cgi/l/email-protection (404 for crawlers). " +
          "Link to /en/resources/contact-us instead (MARTECH-16)."
      );
    }

    expect(offenders.length).toBe(0);
  },
  TIMEOUT
);
