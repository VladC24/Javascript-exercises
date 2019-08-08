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

// Results based on users ratings for one book - get the average rating for the book
const readyPlayerOne = new Book('Ernest Cline', 'Ready Player One', 356);
readyPlayerOne.toggleCheckOutStatus();
console.log(readyPlayerOne.isCheckedOut);
readyPlayerOne.addRating(5);
readyPlayerOne.addRating(4.5);
readyPlayerOne.addRating(4);
console.log(readyPlayerOne.getAverageRating());

