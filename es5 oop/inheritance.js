// constructor
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
};

// Magazine constructor
function Magazine(title,author,year,month) {
    Book.call(this,title,author,year);
    this.month = month;
}

//inherit prototype method

Magazine.prototype = Object.create(Book.prototype);

// instantiate magazine object
const mag1 = new Magazine('Mag one','sifat','2016','jan');

//use magazine constructor
// Magazine.prototype.constructor = Megazine;
console.log(mag1);