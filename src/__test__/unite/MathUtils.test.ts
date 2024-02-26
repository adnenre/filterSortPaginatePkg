import U from "@/modules";
let max = 1000;
let min = 1;
let a = U.Math.random({ min, max });
let b = U.Math.random({ min, max });
describe("🚀 Get a random number 🚀", () => {
  test("should return a random number less or equal to max", () => {
    expect(a).toBeLessThanOrEqual(max);
  });
  test("should return a random number between min and max value", () => {
    let sum = a + b;
    expect(a + b).toBe(sum);
    expect(a + b).toBeLessThanOrEqual(sum);
  });

  test("should return returns the value of a base raised to a power ", () => {
    let expected = U.Math.power(4, 0.5);
    let expected2 = U.Math.power(-7, 0.5);

    expect(expected).toBe(2);
    expect(expected2).toBe(NaN);
  });
  test("Should returns the square root of a number ", () => {
    let a = 7;
    let b = 24;
    let powerSum = a * a + b * b;
    let hypotenuse = U.Math.sqrt(powerSum); // 25

    let expected = U.Math.calcHypotenuse(a, b);
    expect(expected).toBe(hypotenuse);
  });
});
