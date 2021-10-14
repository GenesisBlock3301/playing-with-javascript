const elliptic = require("elliptic")
const sha256 = require("sha256")


let ec = new elliptic.ec("secp256k1")

// console.log(ec)

let keyPair = ec.keyFromPrivate("hid_hash")
// console.log(keyPair)
let privateKey = keyPair.getPrivate("hex")
console.log(privateKey)
let pubKey = keyPair.getPublic()
console.log(pubKey.encode("hex").substr(2))

let msg = "unit value"

let msgHash = sha256(msg);

let signature = ec.sign(msgHash,privateKey,{canonical:true})

console.log("Message",msg)
console.log("Hash message", msgHash)
console.log("Signature",signature)

// recover public key
let hexToDecimal = (x) => ec.keyFromPrivate(x,"hex").getPrivate().toString(10)
let pubKeyRecovered = ec.recoverPubKey(
    hexToDecimal(msgHash),signature,signature.recoveryParam,"hex"
);
console.log("Recovered pubkey",pubKeyRecovered.encodeCompressed("hex"))

let validSign = ec.verify(msgHash,signature,pubKeyRecovered)
console.log("Signature valid?:",validSign);