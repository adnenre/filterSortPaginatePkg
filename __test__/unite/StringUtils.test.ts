// StringUtils.test.ts
import { StringUtils as STR } from "../../src/StringUtils";

describe("🚀 StringUtils 🚀", () => {
  it("should concatenate two strings", () => {
    expect(STR.concatenate("Hello", "World")).toBe("HelloWorld");
  });

  it("should convert a string to uppercase", () => {
    expect(STR.toUpperCase("hello")).toBe("HELLO");
  });

  it("should convert a string to lowercase", () => {
    expect(STR.toLowerCase("HELLO")).toBe("hello");
  });

  it("should extract a substring from a string", () => {
    expect(STR.substring("HelloWorld", 3, 7)).toBe("loWo");
  });

  it("should get the character at a specific position", () => {
    expect(STR.charAt("Hello", 1)).toBe("e");
  });

  it("should get the character code at a specific position", () => {
    expect(STR.charCodeAt("Hello", 1)).toBe(101);
  });

  it("should find the index of a substring in a string", () => {
    expect(STR.indexOf("HelloWorld", "Wo")).toBe(5);
  });

  it("should find the last index of a substring in a string", () => {
    expect(STR.lastIndexOf("HelloWorld", "l")).toBe(8);
  });

  it("should check if a string includes a substring", () => {
    expect(STR.includes("HelloWorld", "o")).toBe(true);
  });

  it("should check if a string starts with a substring", () => {
    expect(STR.startsWith("HelloWorld", "Hell")).toBe(true);
  });

  it("should check if a string ends with a substring", () => {
    expect(STR.endsWith("HelloWorld", "rld")).toBe(true);
  });

  it("should replace occurrences of a substring in a string", () => {
    expect(STR.replace("HelloWorld", "l", "x")).toBe("HexxoWorxd");
  });

  it("should get a slice of a string", () => {
    expect(STR.slice("HelloWorld", 3, 7)).toBe("loWo");
  });

  it("should split a string into an array", () => {
    expect(STR.split("Hello World", " ")).toEqual(["Hello", "World"]);
  });

  it("should trim leading and trailing whitespace from a string", () => {
    expect(STR.trim("   Hello   ")).toBe("Hello");
  });

  it("should repeat a string multiple times", () => {
    expect(STR.repeat("Hello", 3)).toBe("HelloHelloHello");
  });
});
