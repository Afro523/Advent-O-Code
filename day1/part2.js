const { arr } = require('./puzzle-input');
// const { arr } = require('./ex');

let numIncreased = 0;
console.log(arr)
for (let i = 3; i <= arr.length - 1; i++) {
  
  const previousSum = arr[i-1] + arr[i-2] + arr[i-3];
  const currentSum = arr[i] + arr[i-1] + arr[i-2];
  if(currentSum > previousSum) {
    numIncreased++
  }
}

console.log(numIncreased)