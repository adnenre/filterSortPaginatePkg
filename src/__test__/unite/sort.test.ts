import { sort } from "../../modules/utils/sort";
import { Item } from "../../types";
import testItems from "../../data";

describe("sort", () => {
  describe("Sort by price", () => {
    it("should sort by price in ascending order", () => {
      const result = sort(testItems, "price", "asc");

      const expectedOrder = [
        testItems[3], // eSIM Card - 9.9
        testItems[4], // Neck Pillow - 14.9
        testItems[2], // Packing Cubes - 24.5
        testItems[0], // Travel Backpack - 79.9
        testItems[1], // Headphones - 199
      ];

      expect(result).toEqual(expectedOrder);
      expect(result.map((item) => item.price)).toEqual([
        9.9, 14.9, 24.5, 79.9, 199,
      ]);
    });

    it("should sort by price in descending order", () => {
      const result = sort(testItems, "price", "desc");

      const expectedOrder = [
        testItems[1], // Headphones - 199
        testItems[0], // Travel Backpack - 79.9
        testItems[2], // Packing Cubes - 24.5
        testItems[4], // Neck Pillow - 14.9
        testItems[3], // eSIM Card - 9.9
      ];

      expect(result).toEqual(expectedOrder);
      expect(result.map((item) => item.price)).toEqual([
        199, 79.9, 24.5, 14.9, 9.9,
      ]);
    });
  });

  describe("Sort by rating", () => {
    it("should sort by rating in ascending order", () => {
      const result = sort(testItems, "rating", "asc");

      const expectedOrder = [
        testItems[4], // Neck Pillow - 3.8
        testItems[3], // eSIM Card - 4.0
        testItems[2], // Packing Cubes - 4.1
        testItems[0], // Travel Backpack - 4.3
        testItems[1], // Headphones - 4.7
      ];

      expect(result).toEqual(expectedOrder);
      expect(result.map((item) => item.rating)).toEqual([
        3.8, 4.0, 4.1, 4.3, 4.7,
      ]);
    });

    it("should sort by rating in descending order", () => {
      const result = sort(testItems, "rating", "desc");

      const expectedOrder = [
        testItems[1], // Headphones - 4.7
        testItems[0], // Travel Backpack - 4.3
        testItems[2], // Packing Cubes - 4.1
        testItems[3], // eSIM Card - 4.0
        testItems[4], // Neck Pillow - 3.8
      ];

      expect(result).toEqual(expectedOrder);
      expect(result.map((item) => item.rating)).toEqual([
        4.7, 4.3, 4.1, 4.0, 3.8,
      ]);
    });
  });

  describe("Edge cases", () => {
    it("should not mutate the original array", () => {
      const originalItems = [...testItems];
      sort(testItems, "price", "asc");

      expect(testItems).toEqual(originalItems);
    });

    it("should handle empty array", () => {
      const result = sort([], "price", "asc");

      expect(result).toEqual([]);
    });

    it("should handle single item array", () => {
      const singleItem = [testItems[0]];
      const result = sort(singleItem, "price", "asc");

      expect(result).toEqual(singleItem);
    });

    it("should handle array with duplicate prices", () => {
      const itemsWithDuplicates: Item[] = [
        { id: 1, name: "Item A", category: "Test", price: 10, rating: 4.0 },
        { id: 2, name: "Item B", category: "Test", price: 10, rating: 4.5 },
        { id: 3, name: "Item C", category: "Test", price: 5, rating: 3.5 },
      ];

      const result = sort(itemsWithDuplicates, "price", "asc");

      // Items with same price should maintain their relative order (stable sort)
      expect(result.map((item) => item.id)).toEqual([3, 1, 2]);
    });

    it("should handle array with duplicate ratings", () => {
      const itemsWithDuplicates: Item[] = [
        { id: 1, name: "Item A", category: "Test", price: 10, rating: 4.0 },
        { id: 2, name: "Item B", category: "Test", price: 20, rating: 4.0 },
        { id: 3, name: "Item C", category: "Test", price: 5, rating: 3.5 },
      ];

      const result = sort(itemsWithDuplicates, "rating", "asc");

      // Items with same rating should maintain their relative order (stable sort)
      expect(result.map((item) => item.id)).toEqual([3, 1, 2]);
    });
  });

  describe("Property preservation", () => {
    it("should preserve all item properties when sorting by price", () => {
      const result = sort(testItems, "price", "asc");

      // Check that all properties are preserved for the first item
      expect(result[0]).toEqual({
        id: 4,
        name: "eSIM Card",
        category: "Connectivity",
        price: 9.9,
        rating: 4.0,
      });
    });

    it("should preserve all item properties when sorting by rating", () => {
      const result = sort(testItems, "rating", "desc");

      // Check that all properties are preserved for the first item
      expect(result[0]).toEqual({
        id: 2,
        name: "Headphones",
        category: "Electronics",
        price: 199,
        rating: 4.7,
      });
    });
  });

  describe("Type safety", () => {
    it('should only accept "price" or "rating" for sortBy', () => {
      // This test is mainly for TypeScript compilation
      // The function signature should prevent invalid sortBy values
      const result1 = sort(testItems, "price", "asc");
      const result2 = sort(testItems, "rating", "desc");

      expect(result1).toBeDefined();
      expect(result2).toBeDefined();
    });

    it('should only accept "asc" or "desc" for dir', () => {
      // This test is mainly for TypeScript compilation
      // The function signature should prevent invalid dir values
      const result1 = sort(testItems, "price", "asc");
      const result2 = sort(testItems, "price", "desc");

      expect(result1).toBeDefined();
      expect(result2).toBeDefined();
    });
  });

  describe("Integration with same data", () => {
    it("should work with the exact same data as paginate and filter", () => {
      // Verify we're using the same test data
      expect(testItems).toHaveLength(5);
      expect(testItems[0].name).toBe("Travel Backpack");
      expect(testItems[1].name).toBe("Headphones");
      expect(testItems[2].name).toBe("Packing Cubes");
      expect(testItems[3].name).toBe("eSIM Card");
      expect(testItems[4].name).toBe("Neck Pillow");

      // Test sorting works correctly
      const sortedByPrice = sort(testItems, "price", "asc");
      expect(sortedByPrice[0].name).toBe("eSIM Card"); // Cheapest
      expect(sortedByPrice[4].name).toBe("Headphones"); // Most expensive

      const sortedByRating = sort(testItems, "rating", "desc");
      expect(sortedByRating[0].name).toBe("Headphones"); // Highest rated
      expect(sortedByRating[4].name).toBe("Neck Pillow"); // Lowest rated
    });
  });
});
