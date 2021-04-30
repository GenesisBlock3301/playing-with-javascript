// create object

const bookProto = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function () {
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} years old.`
    }
};

//create object

// const book1 = Object.create(bookProto);
// book1.title = 'Book one';
// book1.author = 'Sifat Nas';
// book1.year = '2013';
// console.log(book1)
const book1 = Object.create(bookProto,{
    title : {value:'Book one'},
    author: {value:'Jhon'},
    year: {value:'2013'}
});
console.log(book1);