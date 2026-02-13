// Function to format a number with locale-specific thousands separators.
const formatNumber = (number) => {
	return Math.floor(number).toLocaleString("en-US");
};

export { formatNumber };
