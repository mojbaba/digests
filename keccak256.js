#!/usr/bin/node

var myArgs = process.argv.slice(2);
const keccak256 = require('keccak256')
console.log("0x"+keccak256(myArgs[0]).toString('hex').substr(0,8))
