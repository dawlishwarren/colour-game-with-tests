// Testing:
// Colors array must have only 3 elements
// One array item must match 'correct' state value
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
		"7",
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
});

test("Each item in the return array strictly contains only numbers 0-6 or letters A-F", () => {
	// ForEach Iteration
	function forEach(items, callback) {
		for (let i = 0; i < items.length; i++) {
			callback(items[i]);
		}
	}

	const regExp = new RegExp("[A-F]|[0-6]", "i");

	mockCallback = jest.fn((item) => regExp.test(item));

	forEach([hexMockFn.mock.results[0].value], mockCallback);
	expect(mockCallback.mock.calls).toHaveLength(1);
	expect(mockCallback.mock.calls[0].value).toEqual(true);
});
