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
 * Sitewide chrome (footer, navbar, etc. in app/_components) must not contain a
 * raw email link: Cloudflare Email Obfuscation rewrites it into a
 * /cdn-cgi/l/email-protection URL that returns 404 to crawlers, so one in
 * shared chrome becomes a broken link on every page. Link to
 * /en/resources/contact-us instead. In-content email links on individual pages
 * are fine and are not scanned here.
 *
 * Exception: app/_components/contact-email.tsx is the sanctioned helper that
 * assembles a mailto only on the client (after mount) and renders a plain
 * contact-page link in SSR, so it never emits a raw email link for crawlers.
 */
test(
  "shared components contain no mailto: or email-protection links",
  async () => {
    const files = await fg("app/_components/**/*.{ts,tsx}", {
      // The sanctioned client-only mailto helper (see docstring) is exempt.
      ignore: ["app/_components/contact-email.tsx"],
    });
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
          "Link to /en/resources/contact-us instead."
      );
    }

    expect(offenders.length).toBe(0);
  },
  TIMEOUT
);
