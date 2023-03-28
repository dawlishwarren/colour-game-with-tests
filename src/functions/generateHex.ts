export const generateHex = () => {
	const values = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
	];
	return (
		new Array(6)
			.fill("")
			// Maps with the value at position Math.random() * length
			.map(() => values[Math.floor(Math.random() * values.length)])
	);
};
