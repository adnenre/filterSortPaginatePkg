// stringUtils.ts
export class StringUtils {
  static concatenate(a: string, b: string): string {
    return a + b;
  }
  static toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  static toLowerCase(str: string): string {
    return str.toLowerCase();
  }

  static substring(str: string, start: number, end?: number): string {
    return str.substring(start, end);
  }

  static charAt(str: string, index: number): string {
    return str.charAt(index);
  }

  static charCodeAt(str: string, index: number): number {
    return str.charCodeAt(index);
  }

  static indexOf(str: string, searchValue: string, fromIndex?: number): number {
    return str.indexOf(searchValue, fromIndex);
  }

  static lastIndexOf(
    str: string,
    searchValue: string,
    fromIndex?: number
  ): number {
    return str.lastIndexOf(searchValue, fromIndex);
  }

  static includes(
    str: string,
    searchValue: string,
    position?: number
  ): boolean {
    return str.includes(searchValue, position);
  }

  static startsWith(
    str: string,
    searchValue: string,
    position?: number
  ): boolean {
    return str.startsWith(searchValue, position);
  }

  static endsWith(
    str: string,
    searchValue: string,
    position?: number
  ): boolean {
    return str.endsWith(searchValue, position);
  }

  static replace(
    str: string,
    searchValue: string | RegExp,
    replaceValue: string
  ): string {
    let result = str.split("");
    for (let i = 0; i <= result.length; i++) {
      result[i] === searchValue ? (result[i] = replaceValue) : null;
    }
    return result.join("");
  }

  static slice(str: string, start: number, end?: number): string {
    return str.slice(start, end);
  }

  static split(
    str: string,
    separator: string | RegExp,
    limit?: number
  ): string[] {
    return str.split(separator, limit);
  }

  static trim(str: string): string {
    return str.trim();
  }

  static repeat(str: string, count: number): string {
    return str.repeat(count);
  }

  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static reverse(str: string): string {
    return str.split("").reverse().join("");
  }
}
