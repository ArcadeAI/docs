import { readFileSync } from "node:fs";
import { join } from "node:path";
import fg from "fast-glob";
import { scanURLs, validateFiles } from "next-validate-link";
import { expect, test } from "vitest";

const TIMEOUT = 30_000;

const staticFiles = ["/llms.txt", "/robots.txt", "/sitemap.xml"];

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

      // Handle known redirects
      if (
        url.startsWith("/mcp-servers/") ||
        url.startsWith("/en/mcp-servers/")
      ) {
        // These redirect to /en/resources/integrations/*
        const redirectedPath = url
          .replace("/mcp-servers/", "/en/resources/integrations/")
          .replace("/en/mcp-servers/", "/en/resources/integrations/");
        const [basePath, fragment] = redirectedPath.split("#");

        // Check if the redirected path exists
        const baseExists = scanned.urls?.has(basePath);
        if (!baseExists) {
          return false;
        }

        // If there's a fragment, validate it
        if (fragment) {
          const filePath = join(
            process.cwd(),
            "app",
            basePath.slice(1),
            "page.mdx"
          );
          return validateAnchorFragment(filePath, fragment);
        }

        return true;
      }

      // Handle other known redirect patterns
      const knownRedirects: Record<string, string> = {
        "/get-started/setup/api-key": "/en/get-started/setup/api-keys",
        "/references/auth-providers/": "/en/references/auth-providers",
        "/references/mcp/python/": "/en/references/mcp/python",
        "/guides/tool-calling/": "/en/guides/tool-calling",
        "/guides/tool-calling/custom-apps/authorized-tool-calling":
          "/en/guides/tool-calling/custom-apps/auth-tool-calling",
        "/guides/user-facing-agents/brand-provider":
          "/en/guides/user-facing-agents/secure-auth-production",
        "/guides/tool-calling/mcp-client/visual-studio-code":
          "/en/guides/tool-calling/mcp-clients/visual-studio-code",
        "/guides/tool-calling/get-tool-definitions":
          "/en/guides/tool-calling/custom-apps/get-tool-definitions",
        "/guides/deployment-hosting/engine-configuration":
          "/en/guides/deployment-hosting/configure-engine",
        "/guides/create-tools/performance/run-evaluations":
          "/en/guides/create-tools/evaluate-tools/run-evaluations",
        "/references/arcade-cliarcade-configure": "/en/references/arcade-cli",
        "/resources/oai-agents/overview":
          "/en/guides/agent-frameworks/openai-agents",
        "/resources/creating-tools/tool-basics/build-mcp-server":
          "/en/guides/create-tools/tool-basics/build-mcp-server",
        "/resources/creating-tools/new-functionality/custom-toolkit":
          "/en/guides/create-tools/contribute/registry",
        "/resources/mastra/user-auth-interrupts":
          "/en/guides/agent-frameworks/mastra/user-auth-interrupts",
      };

      // Check if this URL has a known redirect
      const [basePath, fragment] = url.split("#");
      if (knownRedirects[basePath]) {
        const redirectedUrl = knownRedirects[basePath];
        const baseExists = scanned.urls?.has(redirectedUrl);

        if (!baseExists) {
          return false;
        }

        if (fragment) {
          const filePath = join(
            process.cwd(),
            "app",
            redirectedUrl.slice(1),
            "page.mdx"
          );
          return validateAnchorFragment(filePath, fragment);
        }

        return true;
      }

      // For URLs without locale prefix, check if they exist with /en/ prefix
      if (url.startsWith("/")) {
        // Split URL and anchor fragment
        const [path, fragment] = url.split("#");
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
