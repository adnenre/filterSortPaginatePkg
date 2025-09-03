import { Item } from "../../types";
/**
 * The function `sort` sorts an array of items based on a specified property (price or rating) in
 * either ascending or descending order.
 * @param {Item[]} items - An array of items to be sorted.
 * @param {"price" | "rating"} sortBy - The `sortBy` parameter specifies whether the items should be
 * sorted by "price" or "rating".
 * @param {"asc" | "desc"} dir - The `dir` parameter in the `sort` function specifies the
 * direction in which the items should be sorted. It can have two possible values:
 * @returns The `sort` function is returning an array of `Item` objects sorted based on the
 * specified `sortBy` field ("price" or "rating") in either ascending or descending order as determined
 * by the `dir` parameter.
 */
export function sort(
  items: Item[],
  sortBy: "price" | "rating",
  dir: "asc" | "desc"
): Item[] {
  const sorted = [...items]; // Create copy to avoid mutation

  return sorted.sort((a, b) => {
    if (dir === "asc") {
      return a[sortBy] - b[sortBy];
    } else {
      return b[sortBy] - a[sortBy];
    }
  });
}
