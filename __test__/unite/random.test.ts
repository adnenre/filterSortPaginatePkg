import { randomInt } from "../../utils";
let max = 1000;
let min = 1;
let a = randomInt({ min, max });
let b = randomInt({ min, max });
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
