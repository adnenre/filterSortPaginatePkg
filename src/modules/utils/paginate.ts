import { Item } from "../../types";

/**
 * The function `paginate` takes an array of items, a page number, and a page size, and returns a
 * subset of items for the specified page along with the total number of items.
 * @param {Item[]} items - An array of items that you want to paginate.
 * @param {number} page - The `page` parameter in the `paginate` function represents the page
 * number that you want to retrieve items for. It is used to calculate the starting index for slicing
 * the items array based on the specified page number and page size.
 * @param {number} pageSize - The `pageSize` parameter in the `paginate` function represents the
 * number of items that should be displayed on each page when paginating a list of items. It determines
 * how many items will be included in each page of the paginated results.
 * @returns The function `paginate` returns an object with two properties: `results`, which is an
 * array of items based on the specified page and page size, and `total`, which is the total number of
 * items in the original array.
 */
export function paginate(
  items: Item[],
  page: number,
  pageSize: number
): { results: Item[]; total: number } {
  const total = items.length;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const results = items.slice(startIndex, endIndex);

  return { results, total };
}
