import { filterSortPaginate } from "../../modules/index";
import testItems from "../../data";
describe("filter", () => {
  describe("Empty query handling", () => {
    it("should return all items when query is empty string", () => {
      const result = filterSortPaginate(
        testItems,
        "lug",
        "price",
        "asc",
        1,
        10
      );
      const expected = {
        results: [
          {
            id: 3,
            name: "Packing Cubes",
            category: "Luggage",
            price: 24.5,
            rating: 4.1,
          },
          {
            id: 1,
            name: "Travel Backpack",
            category: "Luggage",
            price: 79.9,
            rating: 4.3,
          },
        ],
        total: 2,
      };
      expect(result).toEqual(expected);
    });
  });
});
