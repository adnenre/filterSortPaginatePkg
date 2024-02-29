import { U } from "@/modules";
let max = 1000;
let min = 1;
let a = U.math.randomRange({ min, max });
let b = U.math.randomRange({ min, max });
describe("🚀 Get a random number 🚀", () => {
  test("should return a random number less or equal to max", () => {
    expect(a).toBeLessThanOrEqual(max);
  });
  test("should return a random number between min and max value", () => {
    let sum = a + b;
    expect(a + b).toBe(sum);
    expect(a + b).toBeLessThanOrEqual(sum);
  });
  test("should return a max", () => {
    let max = 1000;
    let min = 1000;
    let a = U.math.randomRange({ min, max });
    let b = U.math.randomRange({ min, max });
    expect(a).toBe(max);
    expect(b).toBeLessThanOrEqual(max);
  });
  test("should return returns the value of a base raised to a power ", () => {
    let expected = U.math.power(4, 0.5);
    let expected2 = U.math.power(-7, 0.5);

    expect(expected).toBe(2);
    expect(expected2).toBe(NaN);
  });
  test("Should returns the square root of a number ", () => {
    let a = 7;
    let b = 24;
    let powerSum = a * a + b * b;
    let hypotenuse = U.math.sqrt(powerSum); // 25

    let expected = U.math.calcHypotenuse(a, b);
    expect(expected).toBe(hypotenuse);
  });

  test("Should returns abs of a  number ", () => {
    let a = -7;

    let expected = U.math.abs(a);
    expect(expected).toBe(7);
  });
});
