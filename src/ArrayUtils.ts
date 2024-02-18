export class ArrayUtils {
  static map<T, U>(arr: T[], mapper: (item: T) => U): U[] {
    const result: U[] = [];
    for (const item of arr) {
      result.push(mapper(item));
    }
    return result;
  }

  static filter<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (const item of arr) {
      if (predicate(item)) {
        result.push(item);
      }
    }
    return result;
  }

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
