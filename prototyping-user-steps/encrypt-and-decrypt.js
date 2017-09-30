
const ethereumjsUtil = require('ethereumjs-util');

console.log('Encode and decode');

var privateKeyHex = "49cf96c5503c2dd6a41fe64d787c81362c434ec8305a8c6caac1c97bbf9ce133";
console.log("privateKeyHex: " + privateKeyHex);

var privateKey = new Buffer(privateKeyHex, "hex");
console.log("privateKey: " + privateKey);

var publicKey = ethereumjsUtil.privateToPublic(privateKey)
var publicKeyHex = publicKey.toString('hex')
console.log("publicKeyHex ethereumjs: " + publicKeyHex);


var crypto = require("crypto");
var eccrypto = require("eccrypto");

// // A new random 32-byte private key.
// var privateKey = crypto.randomBytes(32);
// // Corresponding uncompressed (65-byte) public key.
// var publicKey = eccrypto.getPublic(privateKey);
// console.log("publicKeyHex eccrypto: " + publicKey.toString('hex'));
publicKey = Buffer.concat([new Buffer([4]), publicKey]);
console.log("publicKeyHex 04 byte: " + publicKey.toString('hex'));

var str = "message to sign";
// Always hash you message to sign!
var msg = crypto.createHash("sha256").update(str).digest();

eccrypto.sign(privateKey, msg).then(function(sig) {
    console.log("Signature in DER format:", sig);
    eccrypto.verify(publicKey, msg, sig).then(function() {
        console.log("Signature is OK");
    }).catch(function() {
        console.log("Signature is BAD");
    });
});