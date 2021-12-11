const { input } = require('./puzzle-input');
// const { input } = require('./ex');

const splitInputGroup = [];

for (let i = 0; i <= input.length - 1; i++) {
  splitInputGroup.push(input[i].split(''));
}

function evaluateMostPopular(suppliedInput, bitIndex) {
  // Will go through and evaluate most popular based on supplied input
  // returns array with the binary values that match
  const binaryOneBits = [];
  const binaryZeroBits = [];
  let total = 0;
  for (let i = 0; i < suppliedInput.length; i++) {
    const num = parseInt(suppliedInput[i][bitIndex]);
    num === 1 ? binaryOneBits.push(suppliedInput[i]) : binaryZeroBits.push(suppliedInput[i])
    total += num;
  }

  let mostPopular;
  let selectedBinaries;
  if (total === (suppliedInput.length / 2) || total > (suppliedInput.length / 2)) {
    mostPopular = '1';
    selectedBinaries = binaryOneBits;
  } else {
    mostPopular = '0';
    selectedBinaries = binaryZeroBits;
  }

  if(selectedBinaries.length === 1) {
    return selectedBinaries[0];
  } else {
    return evaluateMostPopular(selectedBinaries, bitIndex+1)
  }
}

function evaluateLeastPopular(suppliedInput, bitIndex) {
  // Will go through and evaluate most popular based on supplied input
  // returns array with the binary values that match
  const binaryOneBits = [];
  const binaryZeroBits = [];
  let total = 0;
  for (let i = 0; i < suppliedInput.length; i++) {
    const num = parseInt(suppliedInput[i][bitIndex]);
    num === 1 ? binaryOneBits.push(suppliedInput[i]) : binaryZeroBits.push(suppliedInput[i])
    total += num;
  }

  let leastPopular;
  let selectedBinaries;
  if (total === (suppliedInput.length / 2) || total > (suppliedInput.length / 2)) {
    leastPopular = '0';
    selectedBinaries = binaryZeroBits;
  } else {
    leastPopular = '1';
    selectedBinaries = binaryOneBits;
  }
  console.log({selectedBinaries})

  if(selectedBinaries.length === 1) {
    return selectedBinaries[0];
  } else {
    return evaluateLeastPopular(selectedBinaries, bitIndex+1)
  }
}

function convertToDecimal(binary) {
  console.log(binary, 'binary')
  let decimal = 0;
  let basePower = 0;
  const binaryLength = binary.length
  for (let i = binaryLength; i > 0; i--) {
    const bit = parseInt(binary[i - 1])
    decimal = decimal + (bit * Math.pow(2, basePower));
    basePower++;
  }
  return decimal
}

const oxygenBinary = evaluateMostPopular(splitInputGroup, 0);
const cO2Binary = evaluateLeastPopular(splitInputGroup, 0);

const oxygen = convertToDecimal(oxygenBinary)
const co2 = convertToDecimal(cO2Binary)

console.log({oxygen})
console.log({co2})
console.log(oxygen * co2)