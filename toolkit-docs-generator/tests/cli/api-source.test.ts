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
    // biome-ignore lint/performance/noDelete: Required to actually remove env vars
    delete process.env.PUBLIC_CATALOG_URL;
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

  it("auto-selects public-catalog when an API URL is passed", () => {
    expect(
      resolveApiSource({ apiUrl: "https://experience.arcade.dev/api" })
    ).toBe("public-catalog");
  });

  it("ignores engine hosts, which point at the wrong path prefix", () => {
    process.env.ARCADE_API_URL = "https://api.arcade.dev";
    process.env.ENGINE_API_URL = "https://api.arcade.dev";

    expect(resolveApiBaseUrlFromEnv()).toBeUndefined();
    expect(resolveApiSource({})).toBe("mock");
  });

  it("reads the API host from PUBLIC_CATALOG_URL", () => {
    process.env.PUBLIC_CATALOG_URL = "https://experience.arcade.dev/api";

    expect(resolveApiBaseUrlFromEnv()).toBe(
      "https://experience.arcade.dev/api"
    );
    expect(resolveApiSource({})).toBe("public-catalog");
  });

  it("defaults to mock when no API URL is configured", () => {
    expect(resolveApiSource({})).toBe("mock");
  });
});
