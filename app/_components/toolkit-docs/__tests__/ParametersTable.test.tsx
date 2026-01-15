import { describe, expect, it } from "vitest";

import type { ToolParameter } from "../types";
import {
  formatEnumValues,
  formatParameterType,
} from "../components/ParametersTable";

describe("ParametersTable helpers", () => {
  describe("formatParameterType", () => {
    it("formats array types with inner type", () => {
      const param: ToolParameter = {
        name: "labels",
        type: "array",
        innerType: "string",
        required: false,
        description: "Labels to add",
        enum: null,
      };

      expect(formatParameterType(param)).toBe("array<string>");
    });

    it("returns base type when no inner type", () => {
      const param: ToolParameter = {
        name: "count",
        type: "integer",
        required: false,
        description: "Count",
        enum: null,
      };

      expect(formatParameterType(param)).toBe("integer");
    });
  });

  describe("formatEnumValues", () => {
    it("filters empty enum values", () => {
      const values = ["open", "", "closed", "  ", "all"];

      expect(formatEnumValues(values)).toEqual(["open", "closed", "all"]);
    });

    it("returns empty array when enum is null", () => {
      expect(formatEnumValues(null)).toEqual([]);
    });

    it("returns empty array when enum is undefined", () => {
      expect(formatEnumValues(undefined)).toEqual([]);
    });
  });
});
