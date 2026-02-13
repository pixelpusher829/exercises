// Function to return a random DNA base.
const returnRandBase = () => {
	const dnaBases = ["A", "T", "C", "G"];
	return dnaBases[Math.floor(Math.random() * 4)];
};

// Function to create a new DNA strand with 15 random bases.
const mockUpStrand = () => {
	const newStrand = [];
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase());
	}
	return newStrand;
};

// Factory function to create a P. aequor specimen object with methods.
const pAequorFactory = (specimenNum, dna) => {
	return {
		specimenNum,
		dna,

		// Mutates a random base in the specimen's DNA.
		mutate() {
			const randIndex = Math.floor(Math.random() * this.dna.length);
			let newBase = returnRandBase();
			while (this.dna[randIndex] === newBase) {
				newBase = returnRandBase();
			}
			this.dna[randIndex] = newBase;
			return this.dna;
		},

		// Compares this specimen's DNA with another specimen.
		compareDNA(otherAequor) {
			let commonBases = 0;
			for (let i = 0; i < this.dna.length; i++) {
				if (this.dna[i] === otherAequor.dna[i]) {
					commonBases++;
				}
			}
			const percentage = ((commonBases / this.dna.length) * 100).toFixed(2);
			console.log(
				`Specimen #${this.specimenNum} and Specimen #${otherAequor.specimenNum} have ${percentage}% DNA in common.`,
			);
		},

		// Determines if the specimen is likely to survive based on C/G content.
		willLikelySurvive() {
			const cgBases = this.dna.filter((base) => base === "C" || base === "G");
			return cgBases.length / this.dna.length >= 0.6;
		},
	};
};

// --- Test Suite / Data Generation ---
// Generates a batch of 30 P. aequor specimens that are likely to survive.
const survivingSpecimens = [];
let idCounter = 1;
while (survivingSpecimens.length < 30) {
	const newOrg = pAequorFactory(idCounter, mockUpStrand());
	if (newOrg.willLikelySurvive()) {
		survivingSpecimens.push(newOrg);
	}
	idCounter++;
}

console.log("30 P. aequor specimens that will likely survive:");
console.log(survivingSpecimens);
