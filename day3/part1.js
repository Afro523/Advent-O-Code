const { input } = require('./puzzle-input');
// const { input } = require('./ex');

console.log(input)
const splitInputGroup = [];

for (let i = 0; i <= input.length - 1; i++) {
  splitInputGroup.push(input[i].split(''));
}

const binaryLength = splitInputGroup[0].length;
let gamma = '';
let epsilon = '';
// itterate over each bit
for (let i = 0; i < binaryLength; i++) {
  let total = 0;
  // itterate through the list
  for (let j = 0; j < splitInputGroup.length; j++) {
    const num = parseInt(splitInputGroup[j][i]);
    total += num;
  }
  const mostPopular = (splitInputGroup.length / 2) > total ? '0' : '1';

  if (mostPopular === '0') {
    gamma = gamma.concat('0')
    epsilon = epsilon.concat('1')
  } else {
    gamma = gamma.concat('1')
    epsilon = epsilon.concat('0')
  }
}

// convert binary string to decimal
let gammaDecimal = 0;
let epsilonDecimal = 0;
let basePower = 0;
for (let i = binaryLength; i > 0; i--) {
  const gammaBit = parseInt(gamma.charAt(i - 1))
  const epsilonBit = parseInt(epsilon.charAt(i - 1))
  gammaDecimal = gammaDecimal + (gammaBit * Math.pow(2, basePower));
  epsilonDecimal = epsilonDecimal + (epsilonBit * Math.pow(2, basePower));
  basePower++;
}

console.log('Final Answer = ', gammaDecimal * epsilonDecimal)