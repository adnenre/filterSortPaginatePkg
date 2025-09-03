import { Item } from "../../types";
//
/**
 * The function `filter` filters an array of items based on a search query matching item names or
 * categories.
 * @param {Item[]} items - An array of items of type `Item`.
 * @param {string} query - The `query` parameter is a string that is used to filter items based on
 * their name or category. If the query is empty or only contains whitespace characters, the function
 * will return all items without applying any filtering. Otherwise, it will filter the items based on
 * whether the item's name or category includes
 * @returns The function `filter` returns an array of `Item` objects that match the search query
 * provided. If the query is empty, it returns all items in the original array. If the query is not
 * empty, it filters the items based on whether the item's name or category includes the search term
 * (case-insensitive).
 */
export function filter(items: Item[], query: string): Item[] {
  if (!query.trim()) return items; // Return all items if query is empty

  const searchTerm = query.toLowerCase();
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
  );
}
