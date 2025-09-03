import { filter } from "./utils/filter";
import { paginate } from "./utils/paginate";
import { sort } from "./utils/sort";
import { Item } from "../types";

/**
 * The function filters, sorts, and paginates a list of items based on given parameters.
 * @param {Item[]} items - An array of items to filter, sort, and paginate.
 * @param {string} query - The `query` parameter is a string used for filtering items based on a search
 * query.
 * @param {"price" | "rating"} sortBy - The `sortBy` parameter specifies the property by which the
 * items should be sorted. It can be either "price" or "rating".
 * @param {"asc" | "desc"} dir - The `dir` parameter in the `filterSortPaginate` function specifies the
 * sorting direction, which can be either "asc" for ascending order or "desc" for descending order.
 * @param {number} page - The `page` parameter specifies the page number for pagination. It indicates
 * which page of results to retrieve from the filtered and sorted items.
 * @param {number} pageSize - The `pageSize` parameter specifies the number of items to display on each
 * page when paginating the results.
 * @returns The function `filterSortPaginate` is returning an object with two properties: `total` and
 * `results`. The `total` property contains the total number of items after filtering and sorting,
 * while the `results` property contains an array of `Item` objects that are paginated based on the
 * specified page and page size.
 */
export function filterSortPaginate(
  items: Item[],
  query: string,
  sortBy: "price" | "rating",
  dir: "asc" | "desc",
  page: number,
  pageSize: number
): { total: number; results: Item[] } {
  return paginate(sort(filter(items, query), sortBy, dir), page, pageSize);
}
