/**
 * Interface representing a range of numbers.
 * @interface
 */
export interface RandomNumberRange {
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
   * @param {RandomNumberRange} args - The range of numbers from which to generate a random integer.
   * @returns {number} A random integer within the specified range.
   * @example
   * const result = MathUtils.randomInt({ min: 0, max: 10 });
   * console.log(result); // Output: Random integer between 0 and 9
   */
  static randomInt = (args: RandomNumberRange): number => {
    if (args.min === args.max) return args.max;
    return Math.floor(Math.random() * (args.max - args.min + 1) + args.min);
  };
}

export { MathUtils };
