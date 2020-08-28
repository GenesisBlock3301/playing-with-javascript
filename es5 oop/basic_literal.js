//object literal
const book1 = {
  title: 'book one',
  author: 'Sifat',
  year: '2017',
    getSummary: function(){
      return `${this.title} was written by ${this.author} in ${this.year}`
    }
};
console.log(book1.getSummary());
const book2 = {
  title: 'book two',
  author: 'Sifat Nas',
  year: '2017',
    getSummary: function(){
      return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

console.log(Object.values(book2));
console.log(Object.keys(book2));