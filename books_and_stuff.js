class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  toggleCheckOutStatus(){
    this.isCheckedOut = !this.isCheckedOut;
  }
  set isCheckedOut(value){
    this.isCheckedOut - value
  }
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length; 
  }
  addRating(value){
    this.ratings.push(value);
  }
}

// Create class Book that inherits from class Media
class Book extends Media {
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

// Create class Movie that inherits from class Media
class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

// Create class CD that inherits from class Media
class CD extends Media {
  constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
}

// Results based on users ratings for one book - get the average rating for the book
const readyPlayerOne = new Book('Ernest Cline', 'Ready Player One', 356);
readyPlayerOne.toggleCheckOutStatus();
console.log(readyPlayerOne.isCheckedOut);
readyPlayerOne.addRating(5);
readyPlayerOne.addRating(4.5);
readyPlayerOne.addRating(4);
console.log(readyPlayerOne.getAverageRating());

// Results based on users ratings for one movie - get the average rating for the movie
const transformers = new Movie('Michael Bay', 'Transformers', 144);
transformers.toggleCheckOutStatus();
console.log(transformers.isCheckedOut);
transformers.addRating(1);
transformers.addRating(3);
transformers.addRating(2);
console.log(transformers.getAverageRating());

// Results based on users ratings for a CD - get the average rating for the CD
const summerPartyHits = new CD('Above&Beyond', 'Summer Party Hits', ['Sun&Moon', 'You got to go', 'Alone tonight'])
summerPartyHits.toggleCheckOutStatus();
console.log(summerPartyHits.isCheckedOut);
summerPartyHits.addRating(5);
summerPartyHits.addRating(5);
summerPartyHits.addRating(5);
console.log(summerPartyHits.getAverageRating());