import { U } from "../../modules";

describe("ObjectUtils", () => {
  it("should deep copy an object", () => {
    const obj = { foo: "bar", nested: { baz: "qux" } };
    const copy = U.Obj.deepCopy(obj);
    expect(copy).toEqual(obj);
    expect(copy).not.toBe(obj); // Ensure not same reference
  });

  it("should merge multiple objects into one", () => {
    const obj1 = { foo: "bar" };
    const obj2 = { bar: "qux" };
    const obj3 = { baz: "aqux" };
    const merged = U.Obj.merge(obj1, obj2, obj3);
    expect(merged).toEqual({ foo: "bar", bar: "qux", baz: "aqux" });
  });

  it("should check if an object is empty", () => {
    expect(U.Obj.isEmpty({})).toBe(true);
    expect(U.Obj.isEmpty({ foo: "bar" })).toBe(false);
  });

  it("should check if an object is not empty", () => {
    expect(U.Obj.isNotEmpty({})).toBe(false);
    expect(U.Obj.isNotEmpty({ foo: "bar" })).toBe(true);
  });

  it("should check if an object has a specific property", () => {
    const obj = { foo: "bar" };
    expect(U.Obj.hasOwnProperty(obj, "foo")).toBe(true);
    expect(U.Obj.hasOwnProperty(obj, "baz")).toBe(false);
  });

  // Add more tests for other object utility methods...
});
