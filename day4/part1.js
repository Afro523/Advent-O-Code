const fs = require('fs');

const test = fs.readFileSync('./ex.txt', 'utf-8')

console.log(test)