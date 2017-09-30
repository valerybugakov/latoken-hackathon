
const ethereumjsUtil = require('ethereumjs-util');

console.log('Geberating public key from private');

var privateKey = "49cf96c5503c2dd6a41fe64d787c81362c434ec8305a8c6caac1c97bbf9ce133";
console.log("privateKey: " + privateKey);

var privateKeyBuffer = new Buffer(privateKey, "hex");
console.log("privateKeyBuffer: " + privateKeyBuffer);

var publicKey = ethereumjsUtil.privateToPublic(privateKeyBuffer).toString('hex')
console.log("publicKey: " + publicKey);
