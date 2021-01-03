

const factorial = (number)=>{
  if (number === 0){
      return 1
  }
  return number*factorial(number-1)
};
const number = prompt("Enter your recursive number: ")
console.log("Factorial Number is: ",factorial(number))