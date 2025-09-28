import { readFileSync } from "node:fs";
import { join } from "node:path";
import fg from "fast-glob";
import { scanURLs, validateFiles } from "next-validate-link";
import { expect, test } from "vitest";

const TIMEOUT = 30_000;

// Function to validate anchor fragments by checking file content
function validateAnchorFragment(filePath: string, fragment: string): boolean {
  try {
    const content = readFileSync(filePath, "utf-8");

    // Generate possible anchor IDs from headings
    const headingRegex = /^#{1,6}\s+(.+)$/gm;
    const headings: string[] = [];
    let match: RegExpExecArray | null;

    match = headingRegex.exec(content);
    while (match !== null) {
      const headingText = match[1].trim();
      // Convert heading to anchor ID (lowercase, spaces to hyphens, remove special chars)
      const anchorId = headingText
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // Remove special characters except hyphens and spaces
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

      headings.push(anchorId);
      match = headingRegex.exec(content);
    }

    return headings.includes(fragment.toLowerCase());
  } catch (_error) {
    // If we can't read the file, assume the fragment is invalid
    return false;
  }
}

test(
  "check for broken links",
  async () => {
    const scanned = await scanURLs({
      preset: "next",
    });

    // Create a whitelist function that allows URLs without locale prefixes
    // if they exist with the default locale prefix
    const whitelist = (url: string): boolean => {
      // If the URL starts with a locale, it's already handled by the scanner
      if (
        url.startsWith("/en/") ||
        url.startsWith("/es/") ||
        url.startsWith("/pt-BR/")
      ) {
        return false; // Let the normal validation handle these
      }

      // For URLs without locale prefix, check if they exist with /en/ prefix
      if (url.startsWith("/")) {
        // Split URL and anchor fragment
        const [basePath, fragment] = url.split("#");
        const localeUrl = `/en${basePath}`;

        // Check if the base path exists with locale prefix
        const baseExists = scanned.urls?.has(localeUrl);

        if (!baseExists) {
          return false;
        }

        // If there's a fragment, validate it by checking the actual file content
        if (fragment) {
          // Convert URL path to file path
          const filePath = join(
            process.cwd(),
            "app",
            "en",
            basePath.slice(1),
            "page.mdx"
          );
          return validateAnchorFragment(filePath, fragment);
        }

        // If no fragment, the base path exists so it's valid
        return true;
      }

      return false;
    };

    const found = await validateFiles(await fg("app/**/*.{md,mdx}"), {
      scanned,
      whitelist,
    });

    for (const error of found) {
      console.error(`Broken link: ${JSON.stringify(error)}`);
    }

    expect(found.length).toBe(0);
  },
  TIMEOUT
);
