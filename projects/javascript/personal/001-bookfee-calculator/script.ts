export default function calculateFee(
	mediaType: string,
	dateReturned: Date,
	dateDue: Date,
) {
	// Validate date inputs.
	if (!(dateReturned instanceof Date) || !(dateDue instanceof Date)) {
		throw new Error("Invalid date input");
	}

	// Calculate the number of days the item is late.
	const daysLate = Math.floor(
		(dateReturned.getTime() - dateDue.getTime()) / (1000 * 60 * 60 * 24),
	);

	// Determine fee based on media type.
	if (mediaType === "book") {
		const fee = daysLate > 0 ? daysLate : 0;
		return Math.min(fee, 30); // Max fee for books is 30.
	}

	if (mediaType === "dvd") {
		const fee = daysLate > 0 ? daysLate * 2 : 0;
		return Math.min(fee, 50); // Max fee for DVDs is 50.
	}

	// Throw error for unsupported media types.
	throw new Error(`Unsupported media type: ${mediaType}`);
}
