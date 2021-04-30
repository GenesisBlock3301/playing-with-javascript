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

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year)
        this.month = month;
    }
}

const mg1 = new Magazine('Book one','Nur AMin','2020','jan');
console.log(mg1);