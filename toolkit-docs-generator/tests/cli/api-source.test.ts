import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  resolveApiBaseUrlFromEnv,
  resolveApiSource,
} from "../../src/cli/api-source";

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
    delete process.env.ARCADE_API_URL;
  });

  afterEach(() => {
    resetEnv();
  });

  it("returns public-catalog when explicitly requested", () => {
    expect(resolveApiSource({ apiSource: "public-catalog" })).toBe(
      "public-catalog"
    );
    expect(resolveApiSource({ apiSource: "public" })).toBe("public-catalog");
  });

  it("returns mock when explicitly requested", () => {
    expect(resolveApiSource({ apiSource: "mock" })).toBe("mock");
  });

  it("rejects removed legacy sources", () => {
    expect(() => resolveApiSource({ apiSource: "tool-metadata" })).toThrow(
      'Invalid --api-source "tool-metadata"'
    );
    expect(() => resolveApiSource({ apiSource: "list-tools" })).toThrow(
      'Invalid --api-source "list-tools"'
    );
  });

  it("auto-selects public-catalog when an API URL is set", () => {
    process.env.ARCADE_API_URL = "https://api.arcade.dev";

    expect(resolveApiSource({})).toBe("public-catalog");
  });

  it("falls back to ENGINE_API_URL for the API host", () => {
    process.env.ENGINE_API_URL = "https://api.arcade.dev";

    expect(resolveApiBaseUrlFromEnv()).toBe("https://api.arcade.dev");
    expect(resolveApiSource({})).toBe("public-catalog");
  });

  it("defaults to mock when no API URL is configured", () => {
    expect(resolveApiSource({})).toBe("mock");
  });
});
