class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  get availability() {
    return this.getAvailability;
  }
  getAvailability() {
    if (this.numCopies === 0) {
      return "out of stock";
    } else if (this.numCopies > 10) {
      return "in stock";
    } else {
      return "low stock";
    }
  }
  sell(numSold = 1) {
    this.numCopies -= numSold;
    return this.numCopies;
  }
  restock(numCopies = 5) {
    this.numCopies += numCopies;
    return this.numCopies;
  }
}

export default Book;
