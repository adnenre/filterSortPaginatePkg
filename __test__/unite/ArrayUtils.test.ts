import { ArrayUtils as ARR } from "../../src/ArrayUtils";

describe("ArrayUtils", () => {
  describe("map", () => {
    it("should map array elements", () => {
      const numbers = [1, 2, 3];
      const double = (num: number) => num * 2;
      const doubled = ARR.map(numbers, double);
      expect(doubled).toEqual([2, 4, 6]);
    });
  });

  describe("filter", () => {
    it("should filter array of number elements", () => {
      const numbers = [1, 2, 3, 4, 5];
      const isEven = (n: number) => n % 2 === 0;
      const evens = ARR.filter(numbers, isEven);
      expect(evens).toEqual([2, 4]);
    });
  });

  describe("groupBy", () => {
    it("should group array elements by key", () => {
      const users = [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Jane", age: 25 },
        { id: 3, name: "Alice", age: 30 },
      ];
      const groupedByAge = ARR.groupBy(users, (user) => user.age.toString());
      expect(groupedByAge).toEqual({
        "25": [{ id: 2, name: "Jane", age: 25 }],
        "30": [
          { id: 1, name: "John", age: 30 },
          { id: 3, name: "Alice", age: 30 },
        ],
      });
    });
  });
});
