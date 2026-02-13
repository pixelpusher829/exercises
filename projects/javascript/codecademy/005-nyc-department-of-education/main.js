// Base class for all school types.
class School{
    constructor(name,level,numberOfStudents,testScores,schoolOverview){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
        this._testScores = testScores;
        this._schoolOverview = schoolOverview;
    }
    
    get name(){ return this._name; }
    get level(){ return this._level; }
    get numberOfStudents(){ return this._numberOfStudents; }
    get testScores(){ return this._testScores; }
    get schoolOverview(){ return this._schoolOverview; }

    set testScores(testScores){
        if (Array.isArray(testScores)) {
            this._testScores = testScores;
        } else{
            console.log('Invalid input: testScores must be set to an Array.');
        }
    }
    
    set numberOfStudents(numberOfStudents){
        if (typeof numberOfStudents === 'number') {
            this._numberOfStudents = numberOfStudents;
        } else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    
    quickFacts(){
       return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`; 
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex];
    }
}

// Primary school class, extends School.
class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy,testScores,schoolOverview){
        super(name, 'primary', numberOfStudents,testScores,schoolOverview);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){ return this._pickupPolicy; }
}

// Middle school class, extends School.
class MiddleSchool extends School{
    constructor(name,numberOfStudents,testScores,schoolOverview){
        super(name, 'middle', numberOfStudents,testScores,schoolOverview);
    }
}

// High school class, extends School.
class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams,testScores,schoolOverview){
        super(name, 'high', numberOfStudents,testScores,schoolOverview);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){ return this._sportsTeams; }
}

// Demonstration of school instances and methods.
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(lorraineHansbury.quickFacts());
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
