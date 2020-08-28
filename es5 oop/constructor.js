// constructor
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
      return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

//instantiate an object
const book1 = new Book('Book one','sifat','2017');
const book2 = new Book('Book two','sifat nas','2017');

console.log(book1.getSummary());