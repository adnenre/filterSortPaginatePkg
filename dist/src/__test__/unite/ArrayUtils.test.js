"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("@/modules");
describe("ArrayUtils", () => {
    it("should initialize array property with provided items", () => {
        const items = [1, 2, 3];
        const myInstance = new modules_1.U.Arr(...items);
        expect(myInstance.getLength()).toEqual(items.length);
        expect(myInstance.getItems()).toEqual(items);
    });
    describe("map", () => {
        it("should map array elements", () => {
            const numbers = [1, 2, 3];
            const double = (num) => num * 2;
            const doubled = modules_1.U.Arr.map(numbers, double);
            expect(doubled).toEqual([2, 4, 6]);
        });
    });
    describe("filter", () => {
        it("should filter array of number elements", () => {
            const numbers = [1, 2, 3, 4, 5];
            const isEven = (n) => n % 2 === 0;
            const evens = modules_1.U.Arr.filter(numbers, isEven);
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
            const groupedByAge = modules_1.U.Arr.groupBy(users, (user) => user.age.toString());
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
