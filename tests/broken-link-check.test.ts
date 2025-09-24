import fg from "fast-glob";
import { scanURLs, validateFiles } from "next-validate-link";
import { expect, test } from "vitest";

const BROKEN_LINKS_FOUND = 0;
const TIMEOUT = 30_000;

test(
  "check for broken links",
  async () => {
    const scanned = await scanURLs({
      preset: "next",
    });

    const found = await validateFiles(await fg("app/**/*.{md,mdx}"), {
      scanned,
    });

    for (const error of found) {
      console.error(`Broken link: ${JSON.stringify(error)}`);
    }

    expect(found.length).toBe(BROKEN_LINKS_FOUND);
  },
  TIMEOUT
);
