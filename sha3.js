#!/usr/bin/node
const { SHA3 } = require('sha3');

const hash = new SHA3(256);
var myArgs = process.argv.slice(2);
hash.update(myArgs[0]);
console.log("0x"+hash.digest('hex').substr(0,8));
