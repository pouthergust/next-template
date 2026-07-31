import { describe, it, expect } from "vitest";
import { sum, multiply, formatName } from "./utils";

describe("Utils", () => {
  describe("sum", () => {
    it("should add two positive numbers", () => {
      expect(sum(2, 3)).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(sum(-5, 3)).toBe(-2);
    });

    it("should handle zero", () => {
      expect(sum(0, 5)).toBe(5);
    });
  });

  describe("multiply", () => {
    it("should multiply two positive numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it("should handle zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it("should handle negative numbers", () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe("formatName", () => {
    it("should format a single word", () => {
      expect(formatName("john")).toBe("John");
    });

    it("should format multiple words", () => {
      expect(formatName("john doe smith")).toBe("John Doe Smith");
    });

    it("should handle uppercase input", () => {
      expect(formatName("JOHN DOE")).toBe("John Doe");
    });

    it("should handle mixed case input", () => {
      expect(formatName("JoHn DoE")).toBe("John Doe");
    });
  });
});
