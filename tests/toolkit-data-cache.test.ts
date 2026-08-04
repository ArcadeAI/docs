import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, describe, expect, test } from "vitest";
import { readToolkitData, readToolkitIndex } from "@/app/_lib/toolkit-data";

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

  test("a transient scan failure can recover after the file is repaired", async () => {
    await expect(
      readToolkitData("CorruptToolkit", { dataDir })
    ).rejects.toThrow(join(dataDir, "corrupttoolkit.json"));

    writeFileSync(
      join(dataDir, "corrupttoolkit.json"),
      validToolkitJson("RecoveredToolkit", "recovered-toolkit")
    );

    const recovered = await readToolkitData("recovered-toolkit", { dataDir });
    expect(recovered?.id).toBe("RecoveredToolkit");
  });

  test("a healthy toolkit id still uses the direct file after a failed scan", async () => {
    const data = await readToolkitData("ValidToolkitOne", { dataDir });
    expect(data?.id).toBe("ValidToolkitOne");
  });
});

describe("readToolkitData direct-file fast path", () => {
  const dataDir = makeFixtureDir();
  dirsToClean.push(dataDir);
  writeFileSync(
    join(dataDir, "corrupttoolkit.json"),
    "{ this is not valid json"
  );

  test("a normalized id does not scan or parse corrupt sibling files", async () => {
    const data = await readToolkitData("ValidToolkitOne", { dataDir });
    expect(data?.id).toBe("ValidToolkitOne");
  });
});

describe("readToolkitIndex schema validation", () => {
  const dataDir = mkdtempSync(join(tmpdir(), "toolkit-index-schema-test-"));
  dirsToClean.push(dataDir);

  test("rejects malformed index entries instead of casting them", async () => {
    writeFileSync(
      join(dataDir, "index.json"),
      JSON.stringify({
        generatedAt: "2026-01-01T00:00:00Z",
        version: "1",
        toolkits: [{ id: "missing-required-fields" }],
      })
    );

    await expect(readToolkitIndex({ dataDir })).rejects.toThrow(
      join(dataDir, "index.json")
    );
  });
});
