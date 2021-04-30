let isString = (val)=>{
    return typeof val === "string" || val instanceof String
}
s = "Nur Amin Sifat"
st = new String("Nas")
console.log(isString(s))
console.log(isString(st))