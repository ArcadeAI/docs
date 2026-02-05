import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import fg from "fast-glob";
import { scanURLs, validateFiles } from "next-validate-link";
import { expect, test } from "vitest";

const TIMEOUT = 30_000;

const staticFiles = ["/llms.txt", "/robots.txt", "/sitemap.xml"];

const toolkitDataDir = join(process.cwd(), "data", "toolkits");

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

function toToolAnchorId(value: string): string {
  return value.toLowerCase().replace(/\s+/g, "-").replace(".", "");
}

const SUPPORTED_LOCALES = ["en", "es", "pt-BR"] as const;
const SUPPORTED_INTEGRATION_CATEGORIES = [
  "productivity",
  "development",
  "social",
  "databases",
  "search",
  "sales",
  "payments",
  "customer-support",
  "entertainment",
  "others",
] as const;

function validateToolkitIntegrationRoute(
  urlPath: string,
  fragment?: string
): boolean {
  // urlPath can be:
  // - /resources/integrations/<category>/<toolkitSlug>
  // - /en/resources/integrations/<category>/<toolkitSlug>
  // (toolkitSlug is the lowercased toolkit id, e.g. githubapi)
  const parts = urlPath.split("/").filter(Boolean);

  let cursor = 0;
  const maybeLocale = parts[cursor];
  if (
    maybeLocale &&
    (SUPPORTED_LOCALES as readonly string[]).includes(maybeLocale)
  ) {
    cursor += 1;
  }

  if (parts[cursor] !== "resources" || parts[cursor + 1] !== "integrations") {
    return false;
  }

  const category = parts[cursor + 2];
  const slug = parts[cursor + 3];
  if (!(category && slug)) {
    return false;
  }

  if (
    !(SUPPORTED_INTEGRATION_CATEGORIES as readonly string[]).includes(category)
  ) {
    return false;
  }

  const jsonPath = join(toolkitDataDir, `${slug}.json`);
  if (!existsSync(jsonPath)) {
    return false;
  }

  if (!fragment) {
    return true;
  }

  const normalized = fragment.toLowerCase();
  if (normalized === "available-tools" || normalized === "get-building") {
    return true;
  }

  try {
    const content = readFileSync(jsonPath, "utf-8");
    const toolkit = JSON.parse(content) as {
      tools?: Array<{ qualifiedName: string }>;
    };
    const anchors = new Set<string>();
    for (const tool of toolkit.tools ?? []) {
      anchors.add(toToolAnchorId(tool.qualifiedName));
    }
    return anchors.has(normalized);
  } catch {
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
        // Special-case dynamic toolkit preview routes (not enumerated by scanURLs).
        const [path, fragment] = url.split("#");
        if (path.startsWith("/en/resources/integrations/")) {
          return validateToolkitIntegrationRoute(path, fragment);
        }
        if (path.startsWith("/es/resources/integrations/")) {
          return validateToolkitIntegrationRoute(path, fragment);
        }
        if (path.startsWith("/pt-BR/resources/integrations/")) {
          return validateToolkitIntegrationRoute(path, fragment);
        }

        return false; // Let the normal validation handle these
      }

      // Since we've updated all the links, we shouldn't need redirects anymore
      // If we find any links that still need redirects, they should be updated in the source files

      // For URLs without locale prefix, check if they exist with /en/ prefix
      if (url.startsWith("/")) {
        // Split URL and anchor fragment
        const [path, fragment] = url.split("#");

        // Special-case dynamic toolkit integration routes (not enumerated by scanURLs).
        if (path.startsWith("/resources/integrations/")) {
          return validateToolkitIntegrationRoute(path, fragment);
        }

        const localeUrl = `/en${path}`;

        if (staticFiles.includes(path)) {
          return true;
        }

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
            path.slice(1),
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
