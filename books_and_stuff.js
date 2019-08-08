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
  constructor(author, title, pages){
    this._author = author;
    super(title);
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}