"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("@/modules");
describe("🚀 StringUtils 🚀", () => {
    it("should concatenate two strings", () => {
        expect(modules_1.U.Str.concatenate("Hello", "World")).toBe("HelloWorld");
    });
    it("should convert a string to uppercase", () => {
        expect(modules_1.U.Str.toUpperCase("hello")).toBe("HELLO");
    });
    it("should convert a string to lowercase", () => {
        expect(modules_1.U.Str.toLowerCase("HELLO")).toBe("hello");
    });
    it("should extract a substring from a string", () => {
        expect(modules_1.U.Str.substring("HelloWorld", 3, 7)).toBe("loWo");
    });
    it("should get the character at a specific position", () => {
        expect(modules_1.U.Str.charAt("Hello", 1)).toBe("e");
    });
    it("should get the character code at a specific position", () => {
        expect(modules_1.U.Str.charCodeAt("Hello", 1)).toBe(101);
    });
    it("should find the index of a substring in a string", () => {
        expect(modules_1.U.Str.indexOf("HelloWorld", "Wo")).toBe(5);
    });
    it("should find the last index of a substring in a string", () => {
        expect(modules_1.U.Str.lastIndexOf("HelloWorld", "l")).toBe(8);
    });
    it("should check if a string includes a substring", () => {
        expect(modules_1.U.Str.includes("HelloWorld", "o")).toBe(true);
    });
    it("should check if a string starts with a substring", () => {
        expect(modules_1.U.Str.startsWith("HelloWorld", "Hell")).toBe(true);
    });
    it("should check if a string ends with a substring", () => {
        expect(modules_1.U.Str.endsWith("HelloWorld", "rld")).toBe(true);
    });
    it("should replace occurrences of a substring in a string", () => {
        expect(modules_1.U.Str.replace("HelloWorld", "l", "x")).toBe("HexxoWorxd");
    });
    it("should get a slice of a string", () => {
        expect(modules_1.U.Str.slice("HelloWorld", 3, 7)).toBe("loWo");
    });
    it("should split a string into an array", () => {
        expect(modules_1.U.Str.split("Hello World", " ")).toEqual(["Hello", "World"]);
    });
    it("should trim leading and trailing whitespace from a string", () => {
        expect(modules_1.U.Str.trim("   Hello   ")).toBe("Hello");
    });
    it("should repeat a string multiple times", () => {
        expect(modules_1.U.Str.repeat("Hello", 3)).toBe("HelloHelloHello");
    });
    it("sould capitalize a string", () => {
        expect(modules_1.U.Str.capitalize("hello")).toBe("Hello");
    });
    it("sould reverse a string", () => {
        expect(modules_1.U.Str.reverse("hello")).toBe("olleh");
    });
});
