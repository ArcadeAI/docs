import { readFileSync } from "node:fs";
import fg from "fast-glob";
import { expect, test } from "vitest";

const TIMEOUT = 30_000;

test(
  "check for absolute links to docs.arcade.dev",
  async () => {
    const files = await fg("app/**/*.{md,mdx}");
    const absoluteLinkRegex = /https?:\/\/docs\.arcade\.dev\//gi;
    const errors: Array<{ file: string; line: number; match: string }> = [];

    for (const file of files) {
      const content = readFileSync(file, "utf-8");
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const matches = lines[i].match(absoluteLinkRegex);
        if (matches) {
          for (const match of matches) {
            errors.push({
              file,
              line: i + 1,
              match,
            });
          }
        }
      }
    }

    for (const error of errors) {
      console.error(
        `Absolute link found in ${error.file}:${error.line} - "${error.match}" should be a relative link`
      );
    }

    expect(errors.length).toBe(0);
  },
  TIMEOUT
);
