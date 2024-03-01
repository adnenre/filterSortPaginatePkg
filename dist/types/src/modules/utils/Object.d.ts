declare class ObjectUtils extends Object {
    /**
     * The `deepCopy` function in TypeScript creates a deep copy of an object using JSON parsing and
     * stringifying.
     * @param {T} obj - The `obj` parameter in the `deepCopy` function is the object that you want to
     * create a deep copy of.
     * @returns A deep copy of the input object `obj` is being returned. The `JSON.stringify` method is
     * used to serialize the object into a JSON string, and then `JSON.parse` is used to parse the JSON
     * string back into a new object, effectively creating a deep copy of the original object.
     */
    static deepCopy<T>(obj: T): T;
    /**
     * The `merge` function in TypeScript merges multiple objects into a single object using
     * `Object.assign`.
     * @param {Record<string, any>[]} objects - The `objects` parameter is an array of objects where each
     * object represents key-value pairs.
     * @returns The `merge` function is returning a new object that is a result of merging all the
     * objects passed as arguments into a single object using `Object.assign()`.
     */
    static merge(...objects: Record<string, any>[]): Record<string, any>;
    /**
     * The function `isEmpty` checks if a given object is empty by verifying if it has no keys.
     * @param obj - The `obj` parameter is a TypeScript object with string keys and values of any type.
     * @returns The function `isEmpty` is returning a boolean value, which indicates whether the input
     * object `obj` is empty (i.e., it has no own enumerable string-keyed properties).
     */
    static isEmpty(obj: Record<string, any>): boolean;
    /**
     * The function `isNotEmpty` checks if a given object is not empty using the `isEmpty` function from
     * `ObjectUtils`.
     * @param obj - The `obj` parameter in the `isNotEmpty` function is expected to be an object of type
     * `Record<string, any>`, which means it is an object where the keys are strings and the values can
     * be of any type.
     * @returns The `isNotEmpty` function is returning a boolean value. It checks if the input object
     * `obj` is not empty using the `ObjectUtils.isEmpty` function and returns the negation of that
     * result.
     */
    static isNotEmpty(obj: Record<string, any>): boolean;
    /**
     * The function `hasOwnProperty` checks if a given object has a specific property key.
     * @param obj - `obj` is an object of type `Record<string, any>`, which means it is a generic object
     * where the keys are strings and the values can be of any type.
     * @param {string} key - The `key` parameter in the `hasOwnProperty` function is a string
     * representing the property key that you want to check for existence in the `obj` object.
     * @returns The `hasOwnProperty` function is returning a boolean value, which indicates whether the
     * `obj` has the specified `key` as its own property.
     */
    static hasOwnProperty(obj: Record<string, any>, key: string): boolean;
}
export { ObjectUtils };
