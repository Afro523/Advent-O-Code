const { arr } = require('../puzzle-input');
// const { arr } = require('./ex');

let numIncreased = 0;
for (let i = 1; i <= arr.length - 1; i++) {
  if(arr[i] > arr[i-1]) {
    numIncreased = numIncreased+1
  }
}

console.log(numIncreased)