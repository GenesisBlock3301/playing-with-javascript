const promise1 = Promise.resolve("Promise one resolved")
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise two resolve")
    }, 2000)
})

// promise1.then(res => console.log(res))
// promise2.then(res => console.log(res))

Promise.race([promise1, promise2]).then(res=>console.log(res))