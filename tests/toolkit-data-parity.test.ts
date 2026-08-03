import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { readToolkitFile, readToolkitIndex } from "@/app/_lib/toolkit-data";
import { listToolkitRoutes } from "@/app/_lib/toolkit-static-params";
import { resolveToolkitDataDir } from "@/toolkit-docs-generator/src/shared/toolkit-data-dir";
import { getToolkitSlug } from "@/toolkit-docs-generator/src/shared/toolkit-primitives";

// resolveToolkitDataDir defaults to the real committed data, but also honors
// TOOLKIT_DATA_DIR (same as readToolkitIndex/listToolkitRoutes below), so
// pointing that env var at a scratch copy runs this exact test against it.
const DATA_DIR = resolveToolkitDataDir();

/**
 * A malformed or missing nightly-generated toolkit file used to disappear
 * from the site silently: readToolkitData/listToolkitRoutes swallowed the
 * error and just dropped the toolkit, so index.json, the on-disk files, and
 * the routes Next.js actually generates could drift apart with nothing
 * failing the build. Runs against the real committed data (not a fixture)
 * so it catches that drift for whatever toolkits are checked in right now.
 */
describe("toolkit data parity", () => {
  test("index.json entries, parseable toolkit files, and generated routes agree", async () => {
    const index = await readToolkitIndex();
    expect(index).not.toBeNull();

    const jsonFileNames = readdirSync(DATA_DIR).filter(
      (file) => file.endsWith(".json") && file !== "index.json"
    );

    // readToolkitFile throws on a corrupt file (see app/_lib/toolkit-data.ts),
    // so a bad file fails this test loudly instead of quietly shrinking the
    // "parseable" count below.
    const toolkits = await Promise.all(
      jsonFileNames.map((file) => readToolkitFile(join(DATA_DIR, file)))
    );
    const parseableToolkits = toolkits.filter((toolkit) => toolkit !== null);

    // Every file on disk should be a real, schema-valid toolkit: no file
    // silently failed to parse into null.
    expect(parseableToolkits).toHaveLength(jsonFileNames.length);

    // index.json is regenerated alongside the per-toolkit files. Compare the
    // actual IDs, not only counts, so a missing file replaced by a different
    // file cannot make this check pass.
    const indexIds = new Set(index?.toolkits.map((toolkit) => toolkit.id));
    const fileIds = new Set(parseableToolkits.map((toolkit) => toolkit.id));
    expect(indexIds).toEqual(fileIds);

    // Routes exclude hidden toolkits (they're intentionally unrouted, not
    // corrupt), so compare their complete category/slug identities rather
    // than only the visible count.
    const expectedRoutes = new Set(
      parseableToolkits
        .filter((toolkit) => !toolkit.metadata.isHidden)
        .map((toolkit) => {
          const slug = getToolkitSlug({
            id: toolkit.id,
            docsLink: toolkit.metadata.docsLink,
          });
          return `${toolkit.metadata.category}/${slug}`;
        })
    );

    const routes = await listToolkitRoutes();
    const actualRoutes = new Set(
      routes.map((route) => `${route.category}/${route.toolkitId}`)
    );
    expect(actualRoutes).toEqual(expectedRoutes);
  });
});
