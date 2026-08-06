import { mkdtempSync, realpathSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, expect, test, vi } from "vitest";

const MODULE_PATH = "@/toolkit-docs-generator/src/shared/toolkit-data-dir";

const importDataDirModule = async () => {
  vi.resetModules();
  return await import(MODULE_PATH);
};

const cleanup: Array<() => void> = [];

afterEach(() => {
  for (const undo of cleanup.splice(0)) {
    undo();
  }
  vi.unstubAllEnvs();
});

/**
 * The default must be anchored on the working directory, not on this module's
 * own location. `app/_lib/toolkit-data.ts` imports it into the Next.js server
 * bundle, where webpack replaces `import.meta.url` with a compile-time
 * constant: the source path on the build machine. A self-relative default
 * therefore resolves to a directory that does not exist inside the deployed
 * function, and `/api/toolkit-data/[toolkitId]` returns 500 in production while
 * every local and build-time read still succeeds.
 */
test("the default data dir follows the working directory", async () => {
  const scratch = realpathSync(
    mkdtempSync(join(tmpdir(), "toolkit-data-dir-"))
  );
  const originalCwd = process.cwd();
  cleanup.push(() => {
    process.chdir(originalCwd);
    rmSync(scratch, { recursive: true, force: true });
  });

  process.chdir(scratch);
  const { DEFAULT_TOOLKIT_DATA_DIR } = await importDataDirModule();

  expect(DEFAULT_TOOLKIT_DATA_DIR).toBe(
    join(scratch, "toolkit-docs-generator", "data", "toolkits")
  );
});

test("an explicit override wins over the env var and the default", async () => {
  vi.stubEnv("TOOLKIT_DATA_DIR", "/from/env");
  const { resolveToolkitDataDir } = await importDataDirModule();

  expect(resolveToolkitDataDir("/explicit")).toBe("/explicit");
});

test("the env var wins over the default", async () => {
  vi.stubEnv("TOOLKIT_DATA_DIR", "/from/env");
  const { resolveToolkitDataDir } = await importDataDirModule();

  expect(resolveToolkitDataDir()).toBe("/from/env");
});
