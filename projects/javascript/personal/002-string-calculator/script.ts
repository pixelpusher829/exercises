export default function stringCalculator(input: string): number {
	let delimiterRegex = /,|\n/;

	// Check for and parse custom delimiters.
	if (input.startsWith("//")) {
		const delimiter = input.charAt(2);
		input = input.split("\n")[1];
		delimiterRegex = new RegExp(`${delimiter}|,|\\n`);
	}

	// Split the input string into numbers.
	const numbers = input.split(delimiterRegex).map(Number);

	// Identify and throw an error for negative numbers.
	const negatives = numbers.filter((n) => n < 0);
	if (negatives.length > 0) {
		throw new Error(`Negatives not allowed: ${negatives.join(",")}`);
	}

	// Sum all valid numbers.
	return numbers.reduce((sum, n) => sum + n, 0);
}