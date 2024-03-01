import crypto from "crypto";
/**
 * Interface representing a range of numbers.
 * @interface
 */
export interface RandomRange {
  /**
   * The minimum value of the range.
   * @type {number}
   */
  min: number;
  /**
   * The maximum value of the range.
   * @type {number}
   */
  max: number;
}

class MathUtils {
  /**
   * Generates a random integer within the specified range.
   * @param {RandomRange} args - The range of numbers from which to generate a random integer.
   * @returns {number} A random integer within the specified range.
   * @example
   * const result = MathUtils.random({ min: 0, max: 10 });
   * console.log(result); // Output: Random integer between 0 and 9
   */
  static readonly RandomRange = (args: RandomRange): number => {
    if (args.min === args.max) return args.max;

    const range = args.max - args.min + 1;
    const randomBuffer = crypto.randomBytes(4);
    const randomNumber = randomBuffer.readUInt32LE(0) / (0xffffffff + 1);

    return Math.floor(randomNumber * range) + args.min;
  };

  /**
   * The static abs function in TypeScript returns the absolute value of a given number.
   * @param {number} x - The parameter `x` is a number that represents the value for which you want to
   * calculate the absolute value.
   * @returns The absolute value of the input number `x` is being returned.
   * @example
   * const result = MathUtils.abs(-7);
   * console.log(result); // Output: 7
   */
  static abs(x: number): number {
    return Math.abs(x);
  }

  /**
   * The static sqrt function in TypeScript calculates the square root of a given number.
   * @param {number} x - The parameter `x` represents the number for which you want to calculate the
   * square root.
   * @returns The square root of the input number `x` is being returned.
   * @example
   * const result = MathUtils.sqrt(9);
   * console.log(result); // Output: 3
   */
  static sqrt(x: number): number {
    return Math.sqrt(x);
  }
  /**
   * The function `pow` calculates the power of a base number raised to an exponent using the
   * `Math.pow` method.
   * @param {number} base - The `base` parameter represents the base number in a power operation. It is
 
  /**
   * The static power function in TypeScript calculates the result of raising a base number to a
   * specified exponent.
   * @param {number} base - The `base` parameter is the number that will be raised to the power of the
   * `exponent`.
   * @param {number} exponent - The exponent parameter in the power function represents the power to
   * which the base number is raised. It determines how many times the base number is multiplied by
   * itself.
   * @returns The `power` function is returning the result of raising the `base` to the power of
   * `exponent` using `Math.pow` method.
   * @example
   * const result = MathUtils.power(2,2);
   * console.log(result); // Output: 4
   */
  static power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  /**
   * This TypeScript function calculates the hypotenuse of a right triangle given the lengths of its two
   * shorter sides.
   * @param {number} a - The parameter `a` represents the length of one side of a right triangle.
   * @param {number} b - The parameter `b` represents the length of one of the sides of a right
   * triangle.
   * @returns The function `calcHypotenuse` is returning the square root of the sum of the squares of
   * the two input numbers `a` and `b`.
   * @example
   * const result = MathUtils.calcHypotenuse(7,24);
   * console.log(result); // Output: 25
   */
  static calcHypotenuse(a: number, b: number) {
    return MathUtils.sqrt(a * a + b * b);
  }

  // Add more methods as needed...
}

export { MathUtils };
