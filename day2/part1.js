const { input } = require('./puzzle-input');
// const { input } = require('./ex');

let horizontalDiff = 0;
let depth = 0;
console.log(input)
for (let i = 0; i <= input.length - 1; i++) {
  let [command, velocity] = input[i];

  switch (command) {
    case 'forward':
        horizontalDiff = horizontalDiff + velocity;
      break;
    case 'down':
        depth = depth + velocity;
      break;
    case 'up':
        depth = depth - velocity;
      break;

    default:
      break;
  }
}

console.log({horizontalDiff})
console.log({depth})

console.log(horizontalDiff * depth);