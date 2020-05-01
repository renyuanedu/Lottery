const path = require('path');
const fs = require('fs');

const solc =require('solc');

const filepath = path.resolve(__dirname,'contracts','Lottery.sol');

// console.log(filepath)

const source = fs.readFileSync(filepath,"utf-8");

module.exports = solc.compile(source,1).contracts[':Lottery'];