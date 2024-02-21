// stringUtils.ts
export class StringUtils {
  /**
   * The `concatenate` function in TypeScript concatenates two strings and returns the result.
   * @param {string} a - string
   * @param {string} b - string
   * @returns The `concatenate` function returns the result of concatenating the two input strings `a`
   * and `b`.
   */
  static concatenate(a: string, b: string): string {
    return a + b;
  }
  /**
   * The function `toUpperCase` takes a string as input and returns the input string converted to
   * uppercase.
   * @param {string} str - A string
   * @returns The `toUpperCase` function is returning the input string `str` converted to uppercase
   * using the `toUpperCase` method in JavaScript.
   */
  static toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  /**
   * The function `toLowerCase` takes a string as input and returns the string converted to lowercase.
   * @param {string} str - The parameter `str` is a string that represents the input text that you want
   * to convert to lowercase.
   * @returns The `toLowerCase` method is being called on the input string `str`, converting all
   * characters to lowercase, and then returning the resulting lowercase string.
   */
  static toLowerCase(str: string): string {
    return str.toLowerCase();
  }

  /**
   * The function "substring" takes a string, a start index, and an optional end index, and returns a
   * substring of the original string based on the provided indices.
   * @param {string} str - a string
   * @param {number} start - The `start` parameter in the `substring` function represents the index at
   * which to begin extracting characters from the string.
   * @param {number} [end] - The `end` parameter in the `substring` function is an optional parameter
   * that specifies the index at which to end the extraction of characters from the string. If the
   * `end` parameter is not provided, the extraction will continue to the end of the string.
   * @returns The `substring` function is returning a substring of the input string `str` starting at
   * the index `start` and ending at the index `end` (if provided).
   */
  static substring(str: string, start: number, end?: number): string {
    return str.substring(start, end);
  }

  /**
   * The function `charAt` takes a string and an index as input and returns the character at the
   * specified index in the string.
   * @param {string} str - A string
   * @param {number} index - The `index` parameter in the `charAt` function represents the position of
   * the character you want to retrieve from the `str` string. It is a number that indicates the
   * zero-based index of the character you want to access.
   * @returns The `charAt` function is returning the character at the specified index in the given
   * string.
   */
  static charAt(str: string, index: number): string {
    return str.charAt(index);
  }

  /**
   * The function `charCodeAt` takes a string and an index, and returns the Unicode value of the
   * character at that index in the string.
   * @param {string} str - a string
   * @param {number} index - The `index` parameter in the `charCodeAt` function represents the position
   * of the character in the string `str` for which you want to retrieve the Unicode value. The index
   * is a zero-based integer value indicating the position of the character in the string.
   * @returns The `charCodeAt` function is returning the Unicode value of the character at the
   * specified index in the given string.
   */
  static charCodeAt(str: string, index: number): number {
    return str.charCodeAt(index);
  }

  /**
   * The `indexOf` function in TypeScript returns the index of the first occurrence of a specified
   * value within a string, starting the search at a specified index if provided.
   * @param {string} str - a string
   * @param {string} searchValue - The `searchValue` parameter is the string that you want to find
   * within the `str` string.
   * @param {number} [fromIndex] - The `fromIndex` parameter in the `indexOf` function is an optional
   * parameter that specifies the index at which to start the search for the `searchValue` within the
   * `str` string. If provided, the search will start at the specified index. If not provided, the
   * search will start at
   * @returns The `indexOf` method is being called on the `str` string with the `searchValue` and
   * optional `fromIndex` parameters. The method returns the index of the first occurrence of the
   * `searchValue` within the `str` string, starting the search at the optional `fromIndex` if
   * provided.
   */
  static indexOf(str: string, searchValue: string, fromIndex?: number): number {
    return str.indexOf(searchValue, fromIndex);
  }

  /**
   * The function `lastIndexOf` returns the index of the last occurrence of a specified value within a
   * string.
   * @param {string} str - a string
   * @param {string} searchValue - The `searchValue` parameter is the string value that you want to
   * find within the `str` string.
   * @param {number} [fromIndex] - The `fromIndex` parameter in the `lastIndexOf` function is an
   * optional parameter that specifies the index at which to start searching backwards in the string.
   * If this parameter is not provided, the search will start from the end of the string.
   * @returns The `lastIndexOf` method is being called on the `str` string with the `searchValue` and
   * optional `fromIndex` parameters. The method returns the index within the calling String object of
   * the last occurrence of the specified value, searching backwards from the specified index
   * `fromIndex`.
   */
  static lastIndexOf(
    str: string,
    searchValue: string,
    fromIndex?: number
  ): number {
    return str.lastIndexOf(searchValue, fromIndex);
  }

  /**
   * The static includes function checks if a string includes a specific search value at an optional
   * specified position.
   * @param {string} str - a string
   * @param {string} searchValue - The `searchValue` parameter is the string that you want to search
   * for within the `str` string.
   * @param {number} [position] - The `position` parameter in the `includes` function is an optional
   * parameter that specifies the position within the string at which to begin searching for the
   * `searchValue`. If provided, the `includes` function will start searching for the `searchValue` at
   * the specified position within the `str` string
   * @returns The `includes` function is returning a boolean value indicating whether the `searchValue`
   * is found within the `str` string starting from the optional `position` index.
   */
  static includes(
    str: string,
    searchValue: string,
    position?: number
  ): boolean {
    return str.includes(searchValue, position);
  }

  /**
   * This static function checks if a string starts with a specified search value at an optional
   * position.
   * @param {string} str - a string
   * @param {string} searchValue - The `searchValue` parameter is the string that the `startsWith`
   * method will check if the given string `str` starts with.
   * @param {number} [position] - The `position` parameter in the `startsWith` function is an optional
   * parameter that specifies the position within the string at which to begin searching for the
   * `searchValue`. If provided, the function will only check if the string starts with the
   * `searchValue` starting from the specified position. If not provided
   * @returns The `startsWith` method is being returned, which checks if a string starts with the
   * specified value.
   */
  static startsWith(
    str: string,
    searchValue: string,
    position?: number
  ): boolean {
    return str.startsWith(searchValue, position);
  }

  /**
   * The function endsWith checks if a string ends with a specified search value.
   * @param {string} str - a strubg
   * @param {string} searchValue - The `searchValue` parameter is the string that the `endsWith` method
   * will check if the input string ends with.
   * @param {number} [position] - The `position` parameter in the `endsWith` function is an optional
   * parameter that specifies the position within the string at which to stop searching for the
   * specified `searchValue`. If provided, the `endsWith` function will only search within the
   * substring starting from the beginning of the string up to the specified position
   * @returns The `endsWith` method is being called on the `str` string with the `searchValue` and
   * optional `position` arguments, and the result of this method call is being returned as a boolean
   * value.
   */
  static endsWith(
    str: string,
    searchValue: string,
    position?: number
  ): boolean {
    return str.endsWith(searchValue, position);
  }

  /**
   * The function replaces all occurrences of a specified search value in a string with a specified
   * replace value.
   * @param {string} str - a string
   * @param {string | RegExp} searchValue - The `searchValue` parameter in the `replace` function can
   * be either a string or a regular expression. It is the value that you want to search for in the
   * input string `str` and replace with the `replaceValue`.
   * @param {string} replaceValue - The `replaceValue` parameter in the `replace` function is the value
   * that will replace the `searchValue` in the input `str` string. It can be a string that will
   * replace all occurrences of the `searchValue` in the input string.
   * @returns The `replace` function is returning a modified string where all occurrences of the
   * `searchValue` have been replaced with the `replaceValue`.
   */
  static replace(
    str: string,
    searchValue: string | RegExp,
    replaceValue: string
  ): string {
    let result = str.split("");
    for (let i = 0; i <= result.length; i++) {
      if (result[i] === searchValue) {
        result[i] = replaceValue;
      }
    }
    return result.join("");
  }

  /**
   * The `slice` function takes a string, a starting index, and an optional ending index, and returns a
   * substring based on the indices provided.
   * @param {string} str - a string
   * @param {number} start - The `start` parameter in the `slice` function represents the index at
   * which to begin extraction. This means that the function will start slicing the string from the
   * character at the index specified by the `start` parameter.
   * @param {number} [end] - The `end` parameter in the `slice` function is an optional parameter that
   * specifies the end index at which to end the extraction of characters from the string. If the `end`
   * parameter is not provided, the extraction will continue to the end of the string.
   * @returns The `slice` method is being called on the `str` string with the `start` and optional
   * `end` parameters. The method returns a new string that is a subset of the original string starting
   * from the `start` index up to (but not including) the `end` index.
   */
  static slice(str: string, start: number, end?: number): string {
    return str.slice(start, end);
  }

  /**
   * The `split` function in TypeScript splits a string into an array of substrings based on a
   * specified separator and optional limit.
   * @param {string} str - a string
   * @param {string | RegExp} separator - The `separator` parameter in the `split` function is used to
   * specify the character or regular expression at which the `str` should be split into an array of
   * substrings.
   * @param {number} [limit] - The `limit` parameter in the `split` function specifies the maximum
   * number of splits to be performed on the input string. If the `limit` parameter is provided, the
   * `split` function will split the input string into substrings at each occurrence of the specified
   * separator up to the limit specified.
   * @returns The `split` function is returning an array of strings after splitting the input `str`
   * based on the `separator` and `limit` provided.
   */
  static split(
    str: string,
    separator: string | RegExp,
    limit?: number
  ): string[] {
    return str.split(separator, limit);
  }

  /**
   * The `trim` function in TypeScript trims any leading and trailing whitespace from a given string.
   * @param {string} str - a string
   * @returns The `trim` function is returning the input string `str` with any leading and trailing
   * whitespace removed.
   */
  static trim(str: string): string {
    return str.trim();
  }

  /**
   * The `repeat` function takes a string and a count, and returns the string repeated the specified
   * number of times.
   * @param {string} str - a string
   * @param {number} count - The `count` parameter specifies the number of times the `str` parameter
   * should be repeated in the `repeat` function.
   * @returns The `repeat` function is returning a new string that is the concatenation of the input
   * string `str` repeated `count` number of times.
   */
  static repeat(str: string, count: number): string {
    return str.repeat(count);
  }

  /**
   * The function `capitalize` takes a string as input and returns the same string with the first
   * letter capitalized.
   * @param {string} str - a string
   * @returns The `capitalize` function returns a new string where the first character of the input
   * string `str` is capitalized.
   */
  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * The `reverse` function in TypeScript takes a string as input and returns the reversed version of
   * that string.
   * @param {string} str - a string
   * @returns The `reverse` function takes a string as input, splits it into an array of characters,
   * reverses the order of the characters in the array, and then joins them back together into a new
   * string. The function returns this new string that has the characters in reverse order.
   */
  static reverse(str: string): string {
    return str.split("").reverse().join("");
  }
}
