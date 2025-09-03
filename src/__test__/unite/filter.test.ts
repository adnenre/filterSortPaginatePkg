import { filter } from "../../modules/utils/filter";
import testItems from "../../data";

describe("filter", () => {
  describe("Empty query handling", () => {
    it("should return all items when query is empty string", () => {
      const result = filter(testItems, "");
      expect(result).toEqual(testItems);
    });

    it("should return all items when query is only whitespace", () => {
      const result = filter(testItems, "   ");
      expect(result).toEqual(testItems);
    });
  });

  describe("Case-insensitive name filtering", () => {
    it("should filter by lowercase name query (exact match)", () => {
      const result = filter(testItems, "Connectivity");
      expect(result).toEqual([testItems[3]]);
    });

    it("should filter by uppercase name query (exact match)", () => {
      const result = filter(testItems, "CONNECTIVITY");
      expect(result).toEqual([testItems[3]]);
    });

    it("should filter by mixed case name query (exact match)", () => {
      const result = filter(testItems, "HeadPHONE");
      expect(result).toEqual([testItems[1]]);
    });

    it("should filter by lowercase partial name match", () => {
      const result = filter(testItems, "Head");
      expect(result).toEqual([testItems[1]]);
    });

    it("should filter by uppercase partial name match", () => {
      const result = filter(testItems, "HEAD");
      expect(result).toEqual([testItems[1]]);
    });

    it("should return multiple items for partial name match", () => {
      const result = filter(testItems, "LUGGAGE");
      expect(result).toEqual([testItems[0], testItems[2]]);
    });

    it("should handle all uppercase item names", () => {
      const result = filter(testItems, "jeans");
      expect(result).toEqual([]);
    });

    it("should handle all lowercase item names", () => {
      const result = filter(testItems, "ESIM CARD");
      expect(result).toEqual([testItems[3]]);
    });
  });

  describe("Case-insensitive category filtering", () => {
    it("should filter by lowercase category query", () => {
      const result = filter(testItems, "electronics");
      expect(result).toEqual([testItems[1]]);
    });

    it("should filter by uppercase category query", () => {
      const result = filter(testItems, "ELECTRONICS");
      expect(result).toEqual([testItems[1]]);
    });

    it("should filter by mixed case category query", () => {
      const result = filter(testItems, "LuggaGe");
      expect(result).toEqual([testItems[0], testItems[2]]);
    });
  });

  describe("No matches found", () => {
    it("should return empty array when no name matches found", () => {
      const result = filter(testItems, "nonexistent");
      expect(result).toEqual([]);
    });

    it("should return empty array when no category matches found", () => {
      const result = filter(testItems, "furniture");
      expect(result).toEqual([]);
    });

    it("should return empty array for special characters", () => {
      const result = filter(testItems, "@#$%");
      expect(result).toEqual([]);
    });
  });

  describe("Edge cases", () => {
    it("should handle single character queries", () => {
      const result = filter(testItems, "l");
      // Should match items containing 'l' in name or category
      expect(result.length).toBeGreaterThan(0);
    });

    it("should handle very long queries", () => {
      const longQuery = "a".repeat(100);
      const result = filter(testItems, longQuery);
      expect(result).toEqual([]);
    });

    it("should not mutate the original array", () => {
      const originalItems = [...testItems];
      filter(testItems, "electronics");
      expect(testItems).toEqual(originalItems);
    });

    it("should handle empty items array", () => {
      const result = filter([], "gadget");
      expect(result).toEqual([]);
    });
  });
});
