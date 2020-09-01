const promise1 = new Promise((resolve,reject)=>{
    resolve("Success")
});

promise1.then(() => {
    console.log("Hello world")
});