import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resolveApiSource } from "../../src/cli/api-source.js";

const ORIGINAL_ENV = { ...process.env };

const resetEnv = () => {
  for (const key of Object.keys(process.env)) {
    delete process.env[key];
  }
  Object.assign(process.env, ORIGINAL_ENV);
};

describe("resolveApiSource", () => {
  beforeEach(() => {
    resetEnv();
    // biome-ignore lint/performance/noDelete: Required to actually remove env vars
    delete process.env.ENGINE_API_KEY;
    // biome-ignore lint/performance/noDelete: Required to actually remove env vars
    delete process.env.ENGINE_API_URL;
    // biome-ignore lint/performance/noDelete: Required to actually remove env vars
    delete process.env.ARCADE_API_KEY;
    // biome-ignore lint/performance/noDelete: Required to actually remove env vars
    delete process.env.ARCADE_API_URL;
  });

  afterEach(() => {
    resetEnv();
  });

  it("returns list-tools only when explicitly requested", () => {
    expect(resolveApiSource({ apiSource: "list-tools" })).toBe("list-tools");
  });

  it("accepts engine as an alias for tool-metadata", () => {
    expect(resolveApiSource({ apiSource: "engine" })).toBe("tool-metadata");
  });

  it("rejects unsupported aliases", () => {
    expect(() => resolveApiSource({ apiSource: "arcade" })).toThrow(
      'Invalid --api-source "arcade"'
    );
  });

  it("auto-selects tool-metadata when Engine credentials exist", () => {
    process.env.ENGINE_API_KEY = "test-key";
    process.env.ENGINE_API_URL = "https://api.arcade.dev";

    expect(resolveApiSource({})).toBe("tool-metadata");
  });

  it("does not auto-select list-tools from Arcade credentials", () => {
    process.env.ARCADE_API_KEY = "test-key";
    process.env.ARCADE_API_URL = "https://api.arcade.dev";

    expect(resolveApiSource({})).toBe("mock");
  });
});
