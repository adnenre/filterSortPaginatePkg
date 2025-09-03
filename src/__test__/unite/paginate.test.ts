import { paginate } from "../../modules/utils/paginate";
import { Item } from "../../types";
import testItems from "../../data";

describe("paginate", () => {
  describe("Basic pagination", () => {
    it("should return first page with correct items and total", () => {
      const result = paginate(testItems, 1, 2);

      expect(result.results).toEqual([testItems[0], testItems[1]]);
      expect(result.total).toBe(5);
      expect(result.results.length).toBe(2);
    });

    it("should return second page with correct items", () => {
      const result = paginate(testItems, 2, 2);

      expect(result.results).toEqual([testItems[2], testItems[3]]);
      expect(result.total).toBe(5);
      expect(result.results.length).toBe(2);
    });

    it("should return third page with remaining items", () => {
      const result = paginate(testItems, 3, 2);

      expect(result.results).toEqual([testItems[4]]);
      expect(result.total).toBe(5);
      expect(result.results.length).toBe(1);
    });

    it("should return all items when page size is 5", () => {
      const result = paginate(testItems, 1, 5);

      expect(result.results).toEqual(testItems);
      expect(result.total).toBe(5);
      expect(result.results.length).toBe(5);
    });
  });

  describe("Page size variations", () => {
    it("should handle page size of 1", () => {
      const result = paginate(testItems, 3, 1);

      expect(result.results).toEqual([testItems[2]]);
      expect(result.total).toBe(5);
      expect(result.results.length).toBe(1);
    });

    it("should handle page size larger than total items", () => {
      const result = paginate(testItems, 1, 10);

      expect(result.results).toEqual(testItems);
      expect(result.total).toBe(5);
      expect(result.results.length).toBe(5);
    });

    it("should handle page size equal to total items", () => {
      const result = paginate(testItems, 1, 5);

      expect(result.results).toEqual(testItems);
      expect(result.total).toBe(5);
      expect(result.results.length).toBe(5);
    });

    it("should handle odd page sizes", () => {
      const result = paginate(testItems, 2, 3);

      expect(result.results).toEqual([testItems[3], testItems[4]]);
      expect(result.total).toBe(5);
      expect(result.results.length).toBe(2);
    });
  });

  describe("Total count verification", () => {
    it("should always return correct total count regardless of page", () => {
      const result1 = paginate(testItems, 1, 2);
      const result2 = paginate(testItems, 2, 2);
      const result3 = paginate(testItems, 5, 2);

      expect(result1.total).toBe(5);
      expect(result2.total).toBe(5);
      expect(result3.total).toBe(5);
    });

    it("should return correct total for filtered arrays", () => {
      const filteredItems = testItems.filter(
        (item) => item.category === "Luggage"
      );
      const result = paginate(filteredItems, 1, 1);

      expect(result.total).toBe(2); // 2 items with category 'Luggage'
      expect(result.results.length).toBe(1);
    });
  });
});
