/* The ArrayUtils class in TypeScript provides a static method to map elements of an array to a new
array based on a given mapping function. */
export class ArrayUtils {
  static map<T, U>(arr: T[], mapper: (item: T) => U): U[] {
    const result: U[] = [];
    for (const item of arr) {
      result.push(mapper(item));
    }
    return result;
  }

  /**
   * The `filter` function takes an array and a predicate function, and returns a new array containing
   * only the elements that satisfy the predicate.
   * @param {T[]} arr - The `arr` parameter is an array of elements of type `T`.
   * @param predicate - The `predicate` parameter in the `filter` function is a callback function that
   * takes an item of type `T` as its argument and returns a boolean value. This function is used to
   * determine whether an item should be included in the resulting array based on the specified
   * condition.
   * @returns The `filter` method is returning an array of elements that satisfy the given `predicate`
   * function.
   */
  static filter<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (const item of arr) {
      if (predicate(item)) {
        result.push(item);
      }
    }
    return result;
  }

  /**
   * The `groupBy` function in TypeScript takes an array of items and groups them based on a specified
   * key function.
   * @param {T[]} arr - The `arr` parameter is an array of elements of type `T` that you want to group
   * based on a specific key.
   * @param keyFn - The `keyFn` parameter is a function that takes an item of type `T` as input and
   * returns a string. This function is used to determine the key for grouping the items in the array
   * `arr`.
   * @returns The `groupBy` function returns an object where the keys are strings and the values are
   * arrays of type `T`.
   */
  static groupBy<T>(
    arr: T[],
    keyFn: (item: T) => string
  ): { [key: string]: T[] } {
    const result: { [key: string]: T[] } = {};
    for (const item of arr) {
      const key = keyFn(item);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
    }
    return result;
  }
}
