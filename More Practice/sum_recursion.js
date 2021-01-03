const array = [1,2,3,4];

const array_sum=(array)=>{
  if(array.length === 1){
      return array[0]
  }
  return array.pop()+array_sum(array)
};
console.log("Array sum",array_sum(array))