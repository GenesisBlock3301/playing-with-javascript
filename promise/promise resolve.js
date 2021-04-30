a = {z:1}
b = {z:5,y:20}
a = b
a.z = 7
console.log(a,b)

var promise = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("Opps"),1000)
});
promise.then(
    // (result) => alert(result)
    (error) => alert(error)
)
console.log(promise);