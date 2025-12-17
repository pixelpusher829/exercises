// Base class for all media items.
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    
    get title() { return this._title; }
    get isCheckedOut() { return this._isCheckedOut; }
    get ratings() { return this._ratings; }

    set isCheckedOut(value) { this._isCheckedOut = value; }
    
    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){
        const sum = this._ratings.reduce((a,b) => a + b)
        return Math.floor(sum / this._ratings.length);
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}

// Book class, extends Media.
class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    
    get author() { return this._author; }
    get pages() { return this._pages; }
}

// Movie class, extends Media.
class Movie extends Media {
    constructor(director,title,runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    
    get director() { return this._director; }
    get runTime() { return this._runTime; }
}

// CD class, extends Media.
class CD extends Media {
    constructor(artist,title,songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    
    get artist() { return this._artist; }
    get songs() { return this._songs; }

    shuffle() {
        this._songs = this._songs.sort(() => Math.random() - 0.5);
    }
}

// Catalog class to hold various media items.
class Catalog{
    constructor() {
        this._media = [];
    }

    addMedia(media) {
        this._media.push(media);
    }

    get media() { return this._media; }
}

// --- Demonstration of classes ---
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
