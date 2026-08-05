import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, describe, expect, test, vi } from "vitest";
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

  test("materializes defaults from the shared schema", async () => {
    const data = await readToolkitData("ValidToolkitOne", { dataDir });
    expect(data?.documentationChunks).toEqual([]);
    expect(data?.customImports).toEqual([]);
    expect(data?.subPages).toEqual([]);
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

describe("readToolkitData production lookup cache", () => {
  test("repeated lookups for the same toolkit share one in-flight promise", async () => {
    const dataDir = makeFixtureDir();
    dirsToClean.push(dataDir);

    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("TOOLKIT_DATA_DIR", dataDir);

    try {
      const firstPromise = readToolkitData("ValidToolkitOne");
      const secondPromise = readToolkitData("ValidToolkitOne");

      expect(firstPromise).toBe(secondPromise);

      const [first, second] = await Promise.all([firstPromise, secondPromise]);
      expect(first?.id).toBe("ValidToolkitOne");
      expect(second?.id).toBe("ValidToolkitOne");
    } finally {
      vi.unstubAllEnvs();
    }
  });

  test("a transient direct read failure can recover after the file is repaired", async () => {
    const dataDir = makeFixtureDir();
    dirsToClean.push(dataDir);
    writeFileSync(
      join(dataDir, "corrupttoolkit.json"),
      "{ this is not valid json"
    );

    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("TOOLKIT_DATA_DIR", dataDir);

    try {
      await expect(readToolkitData("CorruptToolkit")).rejects.toThrow(
        join(dataDir, "corrupttoolkit.json")
      );

      writeFileSync(
        join(dataDir, "corrupttoolkit.json"),
        validToolkitJson("RecoveredToolkit", "recovered-toolkit")
      );

      const recovered = await readToolkitData("RecoveredToolkit");
      expect(recovered?.id).toBe("RecoveredToolkit");
    } finally {
      vi.unstubAllEnvs();
    }
  });
});

/**
 * `readToolkitDataUncached` resolves a lookup from two different forms of the
 * input: the normalized id (direct file, `byNormalizedId`) and the raw
 * lowercased string (`bySlug`). A cache keyed on only the normalized form
 * therefore collapses inputs that resolve differently — "no-tion" and "notion"
 * both normalize to "notion", but only "notion" matches NotionToolkit's docs
 * slug. `/api/toolkit-data/[toolkitId]` takes arbitrary ids, so whichever
 * variant a warm instance saw first would decide the answer for all of them.
 */
describe("readToolkitData cache keys distinguish slug variants", () => {
  const notionToolkit = () =>
    JSON.stringify({
      id: "NotionToolkit",
      label: "Notion",
      version: "1.0.0",
      description: "A test toolkit fixture.",
      metadata: {
        category: "productivity",
        iconUrl: "https://example.com/icon.svg",
        isBYOC: false,
        isPro: false,
        type: "arcade",
        docsLink:
          "https://docs.arcade.dev/en/resources/integrations/productivity/notion",
        isComingSoon: false,
        isHidden: false,
      },
      auth: null,
      tools: [],
    });

  const makeNotionDir = (): string => {
    const dir = mkdtempSync(join(tmpdir(), "toolkit-data-slug-variant-"));
    dirsToClean.push(dir);
    // Named for the normalized id, so "notion" resolves only via the slug map.
    writeFileSync(join(dir, "notiontoolkit.json"), notionToolkit());
    return dir;
  };

  test("a miss on a variant does not pin null for the real slug", async () => {
    const dataDir = makeNotionDir();
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("TOOLKIT_DATA_DIR", dataDir);

    try {
      expect(await readToolkitData("no-tion")).toBeNull();
      expect((await readToolkitData("notion"))?.id).toBe("NotionToolkit");
    } finally {
      vi.unstubAllEnvs();
    }
  });

  test("a hit on the real slug does not make a variant resolve", async () => {
    const dataDir = makeNotionDir();
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("TOOLKIT_DATA_DIR", dataDir);

    try {
      expect((await readToolkitData("notion"))?.id).toBe("NotionToolkit");
      expect(await readToolkitData("no-tion")).toBeNull();
    } finally {
      vi.unstubAllEnvs();
    }
  });

  test("an absent toolkit is not retained in the lookup cache", async () => {
    const dataDir = makeNotionDir();
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("TOOLKIT_DATA_DIR", dataDir);

    try {
      expect(await readToolkitData("not-generated-yet")).toBeNull();

      writeFileSync(
        join(dataDir, "notgeneratedyet.json"),
        validToolkitJson("NotGeneratedYet", "not-generated-yet")
      );

      expect((await readToolkitData("not-generated-yet"))?.id).toBe(
        "NotGeneratedYet"
      );
    } finally {
      vi.unstubAllEnvs();
    }
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
