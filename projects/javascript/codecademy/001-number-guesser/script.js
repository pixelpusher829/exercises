let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate the secret target number
const generateTarget = () => Math.floor(Math.random() * 10);

// Helper function to get the absolute distance between two numbers
const getAbsoluteDistance = (target, guess) => Math.abs(target - guess);

// Function to compare human and computer guesses
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  const humanDifference = getAbsoluteDistance(secretTarget, humanGuess);
  const computerDifference = getAbsoluteDistance(secretTarget, computerGuess);
  return humanDifference <= computerDifference;
};

// Function to update the scores
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

// Function to advance to the next round
const advanceRound = () => {
  currentRoundNumber++;
};

// Function to alert about out-of-range guesses (not currently used in game.js)
const alert = (humanGuess) => {
  if (humanGuess > 9 || humanGuess < 0) {
    return "Your number is out of range, please select a number between 0 and 9";
  }
};
