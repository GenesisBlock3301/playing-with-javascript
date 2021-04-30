class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    static topBookStore(){
        return 'Burnes and Noble';
    }
}

// const book1 = new Book('Book one', 'sifat', '2017');
// console.log(book1);
console.log(Book.topBookStore());
