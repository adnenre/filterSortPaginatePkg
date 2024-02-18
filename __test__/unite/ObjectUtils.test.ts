// Obj.test.ts
import { ObjectUtils as Obj } from "../../src/ObjectUtils";

describe("ObjectUtils", () => {
  it("should deep copy an object", () => {
    const obj = { foo: "bar", nested: { baz: "qux" } };
    const copy = Obj.deepCopy(obj);
    expect(copy).toEqual(obj);
    expect(copy).not.toBe(obj); // Ensure not same reference
  });

  it("should merge multiple objects into one", () => {
    const obj1 = { foo: "bar" };
    const obj2 = { bar: "qux" };
    const obj3 = { baz: "aqux" };
    const merged = Obj.merge(obj1, obj2, obj3);
    expect(merged).toEqual({ foo: "bar", bar: "qux", baz: "aqux" });
  });

  it("should check if an object is empty", () => {
    expect(Obj.isEmpty({})).toBe(true);
    expect(Obj.isEmpty({ foo: "bar" })).toBe(false);
  });

  it("should check if an object is not empty", () => {
    expect(Obj.isNotEmpty({})).toBe(false);
    expect(Obj.isNotEmpty({ foo: "bar" })).toBe(true);
  });

  it("should check if an object has a specific property", () => {
    const obj = { foo: "bar" };
    expect(Obj.hasOwnProperty(obj, "foo")).toBe(true);
    expect(Obj.hasOwnProperty(obj, "baz")).toBe(false);
  });

  // Add more tests for other object utility methods...
});
