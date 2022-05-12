// import Book from "./depting.js";

// const newBook = new Book("Lion King", "Jackie", "123456788889", 9);

function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.overview = function () {
  return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
};

const newMovie = new Movie("hi", "die", "horror", "1999", "9/10");

console.log(newMovie);
newMovie.overview;
console.log(newMovie.overview());
