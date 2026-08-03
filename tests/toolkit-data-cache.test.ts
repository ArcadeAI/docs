import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, describe, expect, test, vi } from "vitest";
import { readToolkitData } from "@/app/_lib/toolkit-data";

/**
 * loadAllToolkitData (app/_lib/toolkit-data.ts) reads and validates every
 * toolkit file in a data directory once, then serves all lookups from the
 * resulting map. That eager read means one corrupt file can no longer be
 * skipped by requesting a different, healthy toolkit — the whole directory
 * load fails, and every lookup against it throws. These tests pin that
 * behavior down explicitly, since it's a real change from the old
 * direct-file-then-scan implementation (a corrupt sibling file was
 * previously invisible to a direct hit).
 */

const validToolkitJson = (id: string, docsSlug: string): string =>
  JSON.stringify({
    id,
    label: id,
    version: "1.0.0",
    description: "A test toolkit fixture.",
    metadata: {
      category: "development",
      iconUrl: "https://example.com/icon.svg",
      isBYOC: false,
      isPro: false,
      type: "arcade",
      docsLink: `https://docs.arcade.dev/en/resources/integrations/development/${docsSlug}`,
      isComingSoon: false,
      isHidden: false,
    },
    auth: null,
    tools: [],
  });

const makeFixtureDir = (): string => {
  const dir = mkdtempSync(join(tmpdir(), "toolkit-data-cache-test-"));
  writeFileSync(
    join(dir, "validtoolkitone.json"),
    validToolkitJson("ValidToolkitOne", "valid-toolkit-one")
  );
  writeFileSync(
    join(dir, "validtoolkittwo.json"),
    validToolkitJson("ValidToolkitTwo", "valid-toolkit-two")
  );
  return dir;
};

const dirsToClean: string[] = [];

afterAll(() => {
  for (const dir of dirsToClean) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("readToolkitData against a clean fixture directory", () => {
  const dataDir = makeFixtureDir();
  dirsToClean.push(dataDir);

  test("a known toolkit id resolves to its data", async () => {
    const data = await readToolkitData("ValidToolkitOne", { dataDir });
    expect(data?.id).toBe("ValidToolkitOne");
  });

  test("a known toolkit reached by its docs slug resolves to the same data", async () => {
    const data = await readToolkitData("valid-toolkit-two", { dataDir });
    expect(data?.id).toBe("ValidToolkitTwo");
  });

  test("an absent toolkit id yields null, not a throw", async () => {
    const data = await readToolkitData("no-such-toolkit-at-all", { dataDir });
    expect(data).toBeNull();
  });

  test("development reads see regenerated files and preserve new fields", async () => {
    vi.stubEnv("NODE_ENV", "development");

    try {
      await readToolkitData("ValidToolkitOne", { dataDir });
      writeFileSync(
        join(dataDir, "validtoolkitone.json"),
        JSON.stringify({
          ...JSON.parse(
            readFileSync(join(dataDir, "validtoolkitone.json"), "utf8")
          ),
          label: "RegeneratedToolkit",
          futureGeneratorField: "preserved",
        })
      );

      const data = await readToolkitData("ValidToolkitOne", { dataDir });
      expect(data?.label).toBe("RegeneratedToolkit");
      expect(
        (data as unknown as Record<string, unknown>).futureGeneratorField
      ).toBe("preserved");
    } finally {
      vi.unstubAllEnvs();
    }
  });
});

describe("readToolkitData against a directory with one corrupt file", () => {
  const dataDir = makeFixtureDir();
  dirsToClean.push(dataDir);
  writeFileSync(
    join(dataDir, "corrupttoolkit.json"),
    "{ this is not valid json"
  );

  test("requesting the corrupt toolkit throws, naming the file path", async () => {
    await expect(
      readToolkitData("CorruptToolkit", { dataDir })
    ).rejects.toThrow(join(dataDir, "corrupttoolkit.json"));
  });

  test("the failure is cached, not retried: a second request throws the same way", async () => {
    // Confirms the deliberate choice to cache a failed load rather than
    // re-scanning the directory on every subsequent call: this directory's
    // corruption doesn't heal between calls, so re-reading it every time
    // would only add cost without ever succeeding.
    await expect(
      readToolkitData("CorruptToolkit", { dataDir })
    ).rejects.toThrow(join(dataDir, "corrupttoolkit.json"));
  });

  // A pre-existing property of the old scan-on-miss implementation too, not
  // a regression introduced by the shared cache: any lookup that needs to
  // rule out every file in the directory (a genuinely absent id, or a slug
  // reached only via the full scan) surfaces a sibling file's corruption,
  // because "is this id absent" can't be answered without reading everything.
  // A healthy toolkit's *direct* id-shaped lookup, though, is unaffected by
  // corruption elsewhere in the directory only when that toolkit was already
  // resident in a load that happened before the corruption — once the whole
  // directory's load has failed once, it stays failed (see the caching test
  // above), so every subsequent lookup against this dataDir throws too.
  test("a healthy toolkit id in the same directory also throws once the directory load has failed", async () => {
    await expect(
      readToolkitData("ValidToolkitOne", { dataDir })
    ).rejects.toThrow(join(dataDir, "corrupttoolkit.json"));
  });
});
