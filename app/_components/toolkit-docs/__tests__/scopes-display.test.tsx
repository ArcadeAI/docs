import { describe, expect, it } from "vitest";

import { normalizeScopes } from "../components/scopes-display";

describe("ScopesDisplay helpers", () => {
  it("trims scope values and removes duplicates", () => {
    const scopes = [
      "repo",
      " user:email ",
      "repo",
      "public_repo",
      "user:email",
    ];

    expect(normalizeScopes(scopes)).toEqual([
      "repo",
      "user:email",
      "public_repo",
    ]);
  });

  it("removes empty and whitespace-only scopes", () => {
    const scopes = ["", "  ", "repo", "\n", "user:email"];

    expect(normalizeScopes(scopes)).toEqual(["repo", "user:email"]);
  });

  it("returns empty array when given empty array", () => {
    expect(normalizeScopes([])).toEqual([]);
  });
});
