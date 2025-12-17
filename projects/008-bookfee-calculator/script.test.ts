import { describe, expect, test } from "bun:test";
import calculateFee from "./script";

describe("Book Late Fee", () => {
	test("returned on time → fee = 0", () => {
		const mediaType = "book";
		const dateDue = new Date(2025, 11, 1);
		const dateReturned = new Date(2025, 10, 15);

		const fee = calculateFee(mediaType, dateReturned, dateDue);
		expect(fee).toBe(0);
	});

	test("returned 1 day late → fee = 1", () => {
		const mediaType = "book";
		const dateDue = new Date(2025, 11, 1);
		const dateReturned = new Date(2025, 11, 2);

		const fee = calculateFee(mediaType, dateReturned, dateDue);
		expect(fee).toBe(1);
	});

	test("returned 40 days late → capped fee = 30", () => {
		const mediaType = "book";
		const dateDue = new Date(2025, 11, 1);
		const dateReturned = new Date(2026, 0, 10);

		const fee = calculateFee(mediaType, dateReturned, dateDue);
		expect(fee).toBe(30);
	});
});

describe("DVD Late Fee", () => {
	test("returned 10 days late → fee = 20", () => {
		const mediaType = "dvd";
		const dateDue = new Date(2025, 11, 1);
		const dateReturned = new Date(2025, 11, 11);

		const fee = calculateFee(mediaType, dateReturned, dateDue);
		expect(fee).toBe(20);
	});

	test("returned 40 days late → capped fee = 50", () => {
		const mediaType = "dvd";
		const dateDue = new Date(2025, 11, 1);
		const dateReturned = new Date(2026, 0, 10);

		const fee = calculateFee(mediaType, dateReturned, dateDue);
		expect(fee).toBe(50);
	});
});

describe("Edge Cases", () => {
	test("fractional day late → floors to whole day", () => {
		const mediaType = "book";
		const dateDue = new Date(2025, 11, 1, 0, 0);
		const dateReturned = new Date(2025, 11, 2, 12, 0);

		const fee = calculateFee(mediaType, dateReturned, dateDue);
		expect(fee).toBe(1);
	});

	test("unsupported media type throws error", () => {
		const mediaType = "magazine";
		const dateDue = new Date(2025, 11, 1);
		const dateReturned = new Date(2025, 11, 2);

		expect(() => calculateFee(mediaType, dateReturned, dateDue)).toThrow(
			"Unsupported media type",
		);
	});

	test("invalid date input throws error", () => {
		const mediaType = "book";
		const dateDue = new Date(2025, 11, 1);
		const dateReturned = "not-a-date" as any;

		expect(() => calculateFee(mediaType, dateReturned, dateDue)).toThrow(
			"Invalid date input",
		);
	});
});
