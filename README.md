# Projects

This repository serves as my personal monorepo for various JavaScript, TypeScript and Python exercises. Each project within is designed to be self-contained and is organized into its own dedicated directory under the `projects` folder. It's a space for me to explore, practice, and solidify my understanding of different programming concepts and techniques.

## Contents

Here is a summary of the projects in this repository:

### JavaScript

#### Codecademy
**[Number Guesser](./projects/javascript/codecademy/001-number-guesser/)**
A web-based number guessing game where a human plays against the computer.

**[Credit Card Checker](./projects/javascript/codecademy/002-credit-card-checker/)**
A utility to validate credit card numbers using the Luhn algorithm.

**[Mystery Organism](./projects/javascript/codecademy/003-mystery-organism/)**
A simulation of DNA strands for a fictional organism, with functions for mutation and comparison.

**[Find Your Hat](./projects/javascript/codecademy/004-find-your-hat/)**
A console-based maze game where the player navigates a field to find their hat.

**[NYC Department of Education](./projects/javascript/codecademy/005-nyc-department-of-education/)**
An object-oriented model of the NYC school system, with classes for different school types.

**[Books 'n' Stuff](./projects/javascript/codecademy/006-books-n-stuff/)**
A media library model using object-oriented principles for Books, Movies, and CDs.

**[WorkAround Explorer](./projects/javascript/codecademy/007-workaround-explorer/)**
A web app that displays and compares salary data for different tech roles and companies.

**[Redux Road](./projects/javascript/codecademy/008-redux-road/)**
A text-based adventure game utilizing the core principles of Redux for state management.

#### Personal
**[Bookfee Calculator](./projects/javascript/personal/001-bookfee-calculator/)**
A practical exercise in Test-Driven Development (TDD), this project calculates late fees for library items, including books and DVDs, based on predefined rules.

**[String Calculator](./projects/javascript/personal/002-string-calculator/)**
Another TDD-focused challenge, this project involves creating a string calculator that parses a string of numbers and returns their sum, with added complexity for handling custom delimiters.

### Python

#### Personal
**[Friendly Greeter](./projects/python/personal/001-friendly-greeter/)**
My first Python exercise! A basic exercise teaching me the basics of reading inputs, storing variables, printing output and running a script.

---

## Getting Started

To get started, first install the dependencies for the projects.

```bash
# Using bun
bun install

# Or using npm
npm install
```

## Running the Projects

Each project is self-contained and can be run in a few different ways.

### TypeScript/JavaScript Files

For projects that are primarily `.ts` or `.js` files, you can run them directly. Alternatively, you can import the desired project module into the main `index.ts` file and then run `bun run index.ts`.

**Example `index.ts` content for running a project:**

```typescript
import stringCalculator from './projects/javascript/personal/002-string-calculator/script.ts';

// Call a function from the imported module
console.log('Result:', stringCalculator("1,2,3"));
```

Then run from the root directory:

```bash
bun run index.ts
```

```bash
# Run a file directly
bun run ./projects/javascript/personal/001-bookfee-calculator/script.ts
```

### Web-Based Projects

For projects that include an `index.html` file, navigate into the project's directory and use `bunx serve` to start a local development server.

```bash
# Navigate to the project directory
cd ./projects/javascript/codecademy/001-number-guesser/

# Start the server
bunx serve
```

You can then open the provided localhost address in your browser to view the project.

### Development Scripts

The `package.json` includes convenience scripts for development:

*   `bun run run:watch`: Runs the `index.ts` file and automatically restarts on changes.
*   `bun test --watch`: Runs all tests and automatically re-runs them on changes.