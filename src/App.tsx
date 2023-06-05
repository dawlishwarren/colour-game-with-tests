import './App.css';
import { useEffect, useState } from 'react';
import { generateHex } from './functions/generateHex';

function App() {
	// App generates 6 digit HEX codes, 3 times, saved into State
	// One of the codes is given as the background colour value of a div, assigned as correct Answer
	// If not the correct answer, clicking shows that it's the wrong number
	// Upon picking the right answer, reset state and run code again

	// The task:
	// Upon page load, 3 buttons exist with hexadecimal codes as the text
	// One matches the hex of the div above, two don't
	// Upon correct answer, generates 'correct' response and reloads the buttons after a timeout
	// useEffect hook calls generateNewHex 3 times and updates state with the code

	interface AppState {
		colors: string[];
		correctColor: string;
		message: string;
	}
	const [state, setState] = useState<AppState>({
		colors: [],
		correctColor: '',
		message: 'Click any button to guess',
	});
	const { colors, correctColor, message } = state;

	// Upon page load, 3 buttons exist with hexadecimal codes as the text
	useEffect(() => {
		const newColors = createColors();
		// State updated to contain 3 colors
		setState({
			...state,
			colors: newColors.colorsArray,
			correctColor: newColors.correct,
		});
	}, []);

	// Function creates 3 random colors using generateHex()
	function createColors() {
		const colorsArray = new Array(3) // An array of 3 values...
			.fill('')
			.map(() => generateHex().join('').toString()); // ...That are the hex code, parsed as a string

		// Select a 'correct' color at random
		const correct = colorsArray[Math.floor(Math.random() * colorsArray.length)];

		// Return the values
		return { colorsArray, correct };
	}

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		const data = (e.target as HTMLButtonElement).value;
		if (data !== correctColor) {
			setState({ ...state, message: 'Incorrect, guess again!' });
		} else if (data === correctColor) {
			setState({ ...state, message: 'Correct!' });
			handleCorrect();
		}
	}

	function handleCorrect() {
		setTimeout(() => {
			const newColors = createColors();
			// State updated to contain 3 colors
			setState({
				...state,
				colors: newColors.colorsArray,
				correctColor: newColors.correct,
				message: 'Click any button to guess',
			});
		}, 1000);
	}

	return (
		<div className='App'>
			<div>
				<h1>Guess the colour!</h1>
				<div
					style={{ backgroundColor: `#${correctColor}` }}
					className='colorBox'
				/>
				{colors.map((color, i) => (
					<button value={color} key={i} onClick={handleClick}>
						#{color}
					</button>
				))}
				<h3 className='message'>{message}</h3>
			</div>
		</div>
	);
}

export default App;
