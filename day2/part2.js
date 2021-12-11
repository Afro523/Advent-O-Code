const { input } = require('./puzzle-input2');
// const { input } = require('./ex');

let horizontalDiff = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i <= input.length - 1; i++) {
  let [command, velocity] = input[i];

  switch (command) {
    case 'forward':
        horizontalDiff = horizontalDiff + velocity;
        if (aim !== 0) {
          depth = depth + (velocity * aim);
          console.log({depth})
        }
      break;
    case 'down':
        aim = aim + velocity
      break;
    case 'up':
        aim = aim - velocity;
      break;

    default:
      console.log('wtf')
      break;
  }
  console.log({aim})
}

console.log({horizontalDiff})
console.log({depth})

console.log(horizontalDiff * depth);