const prompt = require("prompt-sync")({sigint: true});

// Define game characters.
const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

// Field class to manage the game board.
class Field {
	constructor(field) {
		this._field = field;
		this._height = field.length;
		this._width = field[0].length;
		this._hatLocation = this.findCharacterLocation(hat);
		this._playerLocation = this.findCharacterLocation(pathCharacter);
	}

	// Finds a character's location on the field.
	findCharacterLocation(char) {
		for (let y = 0; y < this._height; y++) {
			const x = this._field[y].indexOf(char);
			if (x !== -1) {
				return {x, y};
			}
		}
		return null;
	}

	// Prints the current state of the field.
	print() {
		return this._field.map((row) => row.join("")).join("\n");
	}

	// Player movement methods (moveUp, moveDown, moveLeft, moveRight).
	moveUp() {
		if (this._playerLocation.y > 0) {
			this._playerLocation.y -= 1;
			return true;
		}
		return "out";
	}

	moveDown() {
		if (this._playerLocation.y < this._height - 1) {
			this._playerLocation.y += 1;
			return true;
		}
		return "out";
	}

	moveLeft() {
		if (this._playerLocation.x > 0) {
			this._playerLocation.x -= 1;
			return true;
		}
		return "out";
	}

	moveRight() {
		if (this._playerLocation.x < this._width - 1) {
			this._playerLocation.x += 1;
			return true;
		}
		return "out";
	}

	// Updates the field based on the player's new position.
	updateField() {
		const {x, y} = this._playerLocation;
		const currentPosition = this._field[y][x];

		if (currentPosition === hat) {
			console.log("You found the hat! You win!");
			return "win";
		} else if (currentPosition === hole) {
			console.log("Oh no! You fell into a hole! Game over.");
			return "lose";
		}
		this._field[y][x] = pathCharacter;
		return null;
	}

	// Statically generates a new solvable game field.
	static generateField(width, height, percentage) {
		const totalTiles = width * height;
		const numHoles = Math.floor(totalTiles * (percentage / 100));
		let field;

		const copyField = (f) => f.map(row => [...row]);

		const isSolvable = (f, start, end) => {
			const queue = [start];
			const visited = new Set([`${start.y},${start.x}`]);
			const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

			while (queue.length > 0) {
				const {y, x} = queue.shift();

				if (y === end.y && x === end.x) {
					return true;
				}

				for (const [dy, dx] of directions) {
					const newY = y + dy;
					const newX = x + dx;

					if (
						newY >= 0 && newY < height &&
						newX >= 0 && newX < width &&
						!visited.has(`${newY},${newX}`) &&
						f[newY][newX] !== hole
					) {
						visited.add(`${newY},${newX}`);
						queue.push({y: newY, x: newX});
					}
				}
			}
			return false;
		};

		while (true) {
			field = Array(height).fill(null).map(() => Array(width).fill(fieldCharacter));

			const hatY = Math.floor(Math.random() * height);
			const hatX = Math.floor(Math.random() * width);
			field[hatY][hatX] = hat;

			let playerY, playerX;
			do {
				playerY = Math.floor(Math.random() * height);
				playerX = Math.floor(Math.random() * width);
			} while (playerY === hatY && playerX === hatX);
			field[playerY][playerX] = pathCharacter;

			for (let i = 0; i < numHoles; i++) {
				let holeY, holeX;
				do {
					holeY = Math.floor(Math.random() * height);
					holeX = Math.floor(Math.random() * width);
				} while (
					(holeY === hatY && holeX === hatX) ||
					(holeY === playerY && holeX === playerX) ||
					field[holeY][holeX] === hole
					);
				field[holeY][holeX] = hole;
			}

			if (isSolvable(copyField(field), {y: playerY, x: playerX}, {y: hatY, x: hatX})) {
				return field;
			}
		}
	}
}

// Main game loop.
function playGame(field) {
	let gameOver = null;

	while (!gameOver) {
		console.clear();
		console.log(field.print());

		const move = prompt("Which way? (w/a/s/d) ").toLowerCase();
		let moveResult;

		switch (move) {
			case "w":
				moveResult = field.moveUp();
				break;
			case "a":
				moveResult = field.moveLeft();
				break;
			case "s":
				moveResult = field.moveDown();
				break;
			case "d":
				moveResult = field.moveRight();
				break;
			default:
				console.log("Invalid input. Use w, a, s, or d.");
				continue;
		}

		if (moveResult === "out") {
			console.log("You went out of bounds! Game over.");
			gameOver = "lose";
		} else {
			gameOver = field.updateField();
		}
	}
}

// Start the game by generating a field and calling the game loop.
const myField = new Field(Field.generateField(20, 10, 30));
playGame(myField);
