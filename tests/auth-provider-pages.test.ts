import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getAuthProviderDocsUrl } from "@/components/toolkit-docs/constants";
import { redirects } from "@/redirects";
import {
  AUTH_PROVIDER_PAGE_IDS,
  REDIRECTED_AUTH_PROVIDER_IDS,
} from "@/toolkit-docs-generator/src/shared/auth-provider-pages";
import { CONTENT_ROOT, listChildSlugs } from "./helpers/content-paths";

const AUTH_PROVIDERS_DIR = join(CONTENT_ROOT, "references", "auth-providers");

describe("AUTH_PROVIDER_PAGE_IDS", () => {
  it("matches the pages under content/docs/references/auth-providers", () => {
    // Each provider page is `<id>.mdx` (or `<id>/index.mdx`); the folder's own
    // `index.mdx` is the section overview, not a provider.
    const pageSlugs = listChildSlugs(AUTH_PROVIDERS_DIR);

    expect([...AUTH_PROVIDER_PAGE_IDS].sort()).toEqual(pageSlugs);
  });
});

describe("REDIRECTED_AUTH_PROVIDER_IDS", () => {
  it.each(REDIRECTED_AUTH_PROVIDER_IDS)(
    "%s redirects to an existing provider page",
    (providerId) => {
      const redirect = redirects.find(
        (entry) =>
          entry.source === `/:locale/references/auth-providers/${providerId}`
      );
      const target = redirect?.destination.split("/").at(-1) ?? "";

      expect(AUTH_PROVIDER_PAGE_IDS).toContain(target);
    }
  );
});

describe("getAuthProviderDocsUrl", () => {
  it("returns the page path for a provider that has a page", () => {
    expect(getAuthProviderDocsUrl("GitHub")).toBe(
      "/references/auth-providers/github"
    );
  });

  it("returns the path for a provider ID that redirects to a page", () => {
    expect(getAuthProviderDocsUrl("squareup")).toBe(
      "/references/auth-providers/squareup"
    );
  });

  it("returns null for a provider with no page", () => {
    expect(getAuthProviderDocsUrl("box")).toBeNull();
  });
});
