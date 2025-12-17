import stringCalculator from "./script";
import { describe, expect, test } from "bun:test";

describe("stringCalculator", () => {
	test("Empty string returns 0", () => {
		const input = "";
		expect(stringCalculator(input)).toEqual(0);
	});

	test("Single number returns itself", () => {
		const input = "5";
		expect(stringCalculator(input)).toEqual(5);
	});

	test("Two numbers, comma separated, return sum", () => {
		const input = "2,3";
		expect(stringCalculator(input)).toEqual(5);
	});

	test("Handle multiple numbers", () => {
		const input = "1,2,3,4";
		expect(stringCalculator(input)).toEqual(10);
	});

	test("Support newlines as delimiters", () => {
		const input = "1\n2,3";
		expect(stringCalculator(input)).toEqual(6);
	});

	test("Custom delimiter syntax", () => {
		const input = "//;\n1;2";
		expect(stringCalculator(input)).toEqual(3);
	});

	test("Negative numbers throw an error", () => {
		const input = "1,-2,3";
		expect(() => stringCalculator(input)).toThrow(
			Error("Negatives not allowed: -2"),
		);
	});
});
