import U from "@/modules";
let max = 1000;
let min = 1;
let a = U.Math.randomInt({ min, max });
let b = U.Math.randomInt({ min, max });
describe("🚀 Get a random number 🚀", () => {
  test("should return a random number less or equal to max", () => {
    expect(a).toBeLessThanOrEqual(max);
  });
  test("should return a random number between min and max value", () => {
    let sum = a + b;
    expect(a + b).toBe(sum);
    expect(a + b).toBeLessThanOrEqual(sum);
  });
});
