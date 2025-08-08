import fg from "fast-glob";
import { validateFiles, scanURLs } from "next-validate-link";
import { expect, test } from "vitest";

test("check for broken links", async () => {
  const scanned = await scanURLs({
    preset: "next",
  });

  const found = await validateFiles(await fg("app/**/*.{md,mdx}"), {
    scanned,
  });

  for (const error of found) {
    console.error(`Broken link: ${JSON.stringify(error)}`);
  }

  expect(found.length).toBe(0);
}, 60000);
