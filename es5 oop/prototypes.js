// constructor
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getSummary = function(){
    //   return `${this.title} was written by ${this.author} in ${this.year}`
    // }
}

//getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
};

// getAge
Book.prototype.getAge = function () {
  const year = new Date().getFullYear() - this.year;
  return `${this.title} is ${year} years old.`
};
//
// revised / change year

Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}
//instantiate an object
const book1 = new Book('Book one','sifat','2017');
const book2 = new Book('Book two','sifat nas','2017');

book2.revise('2018');
console.log(book2);