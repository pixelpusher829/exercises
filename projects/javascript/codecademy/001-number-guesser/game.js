let target;

// DOM element references
const humanGuessInput = document.getElementById("human-guess");
const roundNumberDisplay = document.getElementById("round-number");
const computerGuessDisplay = document.getElementById("computer-guess");
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");
const targetNumberDisplay = document.getElementById("target-number");
const computerWinsDisplay = document.getElementById("computer-wins");
const guessButton = document.getElementById("guess");
const nextRoundButton = document.getElementById("next-round");

// Main 'Guess' button event listener
guessButton.addEventListener("click", () => {
	target = generateTarget();
	const currentHumanGuess = humanGuessInput.value;
	const computerGuess = Math.floor(Math.random() * 10);

	computerGuessDisplay.innerText = computerGuess;
	targetNumberDisplay.innerText = target;

	const humanIsWinner = compareGuesses(
		currentHumanGuess,
		computerGuess,
		target,
	);
	const winner = humanIsWinner ? "human" : "computer";

	updateScore(winner);

	if (humanIsWinner) {
		guessButton.innerText = "You Win!!!!!";
		guessButton.classList.toggle("winning-text");
	} else {
		computerWinsDisplay.innerText = "Computer Wins!!!";
	}

	humanScoreDisplay.innerText = humanScore;
	computerScoreDisplay.innerText = computerScore;

	guessButton.setAttribute("disabled", true);
	nextRoundButton.removeAttribute("disabled");
});

// 'Next Round' button event listener
nextRoundButton.addEventListener("click", () => {
	advanceRound();
	roundNumberDisplay.innerText = currentRoundNumber;

	nextRoundButton.setAttribute("disabled", true);
	guessButton.removeAttribute("disabled");

	targetNumberDisplay.innerText = "?";
	guessButton.innerText = "Make a Guess";
	humanGuessInput.value = "";
	computerGuessDisplay.innerText = "?";
	computerWinsDisplay.innerText = "";
	guessButton.classList.remove("winning-text");
});

// Input adjustment buttons
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");

addButton.addEventListener("click", () => {
	humanGuessInput.value = +humanGuessInput.value + 1;
	handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener("click", () => {
	humanGuessInput.value = +humanGuessInput.value - 1;
	handleValueChange(humanGuessInput.value);
});

// Handles enabling/disabling of input adjustment buttons
const handleValueChange = (value) => {
	if (value > 0 && value <= 9) {
		subtractButton.removeAttribute("disabled");
		addButton.removeAttribute("disabled");
	} else if (value > 9) {
		addButton.setAttribute("disabled", true);
	} else if (value <= 0) {
		subtractButton.setAttribute("disabled", true);
	}
};

// Input field change listener
humanGuessInput.addEventListener("input", function (e) {
	handleValueChange(e.target.value);
});
