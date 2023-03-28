const hexMockFn = jest.fn(() => {
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
	return new Array(6)
		.fill("")
		.map(() => values[Math.floor(Math.random() * values.length)]);
});

hexMockFn();

test("Function has been called", () => {
	expect(hexMockFn).toHaveBeenCalled();
});

test("Function return array is strictly 6 digits long", () => {
	expect(hexMockFn.mock.results[0].value).toHaveLength(6);
	expect(hexMockFn.mock.results[0].value).not.toHaveLength(5);
});

test("Each item in the return array strictly contains only numbers 0-6 or letters A-F", () => {
	expect(hexMockFn.mock.results[0].value.join("")).toMatch(/^[a-fA-F0-9]+$/gim);
});
