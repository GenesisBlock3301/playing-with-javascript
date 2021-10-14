const takeOrder = (customer, callback) => {
    console.log(`Take order for customer ${customer}`)
    callback(customer)
}
const processOrder = (customer, callback) => {
    console.log("Processor ordering for customer..")
    let currentTime = new Date().getTime()
    // while (currentTime + 3000 >= new Date().getTime()) ;
    setTimeout(() => {
        console.log("cooking complete")
        console.log(`Order processed for customer ${customer}`)
        callback(customer)
    }, 3000)
}

const completeOrder = (customer) => {
    console.log(`Customer order complete ${customer}`)
}

takeOrder("Customer 1", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer)
    })
})
console.log("Hello world")