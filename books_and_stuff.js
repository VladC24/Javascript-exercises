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