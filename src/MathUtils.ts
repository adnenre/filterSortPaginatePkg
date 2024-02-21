/* The `interface RandomNumber` is defining a structure for an object that has two properties: `min`
and `max`, both of which are of type `number`. This interface is used to specify the shape of the
object that the `randomInt` function expects as its argument. By defining this interface, you are
ensuring that any object passed to the `randomInt` function must have `min` and `max` properties of
type `number`. */
interface RandomNumber {
  min: number;
  max: number;
}
/**
 * The function `randomInt` generates a random integer within a specified range.
 * @param {RandomNumber}  - The `randomInt` function takes an object with two properties `min` and
 * `max` as input. These properties are defined in the `RandomNumber` interface. The function generates
 * a random integer between the `min` and `max` values (inclusive) and returns it. If `min
 * @returns The function `randomInt` returns a random integer between the `min` and `max` values
 * provided in the `RandomNumber` object.
 */
export const randomInt = ({ min, max }: RandomNumber): number => {
  if (min === max) return max;
  return Math.floor(Math.random() * (max - min + 1) + min);
};
