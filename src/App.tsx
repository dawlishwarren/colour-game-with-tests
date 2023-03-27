import "./App.css";
function App() {
	// App generates 6 digit HEX codes, 3 times, saved into State
	// One of the codes is given as the background colour value of a div, assigned as correct Answer
	// If not the correct answer, clicking shows that it's the wrong number
	// Upon picking the right answer, reset state and runs code again
	const generateNewHex = () => {
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
		];
		let joined = values.join("");
		let regExp = new RegExp(joined);

		return (
			new Array(6)
				.fill("")
				// Maps with the value at position Math.random() * length
				.map(() => values[Math.floor(Math.random() * values.length)])
		);
	};
	generateNewHex();
	return (
		<div className="App">
			<div>
				<h1>Hello World</h1>
			</div>
		</div>
	);
}

export default App;
