import { describe, expect, it } from "vitest";

import {
  INTEGRATION_CATEGORIES,
  normalizeCategory,
} from "../../../app/_lib/toolkit-category";

describe("normalizeCategory", () => {
  it("keeps known categories", () => {
    for (const category of INTEGRATION_CATEGORIES) {
      expect(normalizeCategory(category)).toBe(category);
    }
  });

  it("maps missing and unknown values to others", () => {
    expect(normalizeCategory(undefined)).toBe("others");
    expect(normalizeCategory(null)).toBe("others");
    expect(normalizeCategory("")).toBe("others");
    expect(normalizeCategory("not-a-real-category")).toBe("others");
  });
});
