const input = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 10, 1, 19, 1, 19, 9, 23, 1, 23, 6, 27, 1, 9, 27, 31, 1, 31, 10, 35, 2, 13, 35, 39, 1, 39, 10, 43, 1, 43, 9, 47, 1, 47, 13, 51, 1, 51, 13, 55, 2, 55, 6, 59, 1, 59, 5, 63, 2, 10, 63, 67, 1, 67, 9, 71, 1, 71, 13, 75, 1, 6, 75, 79, 1, 10, 79, 83, 2, 9, 83, 87, 1, 87, 5, 91, 2, 91, 9, 95, 1, 6, 95, 99, 1, 99, 5, 103, 2, 103, 10, 107, 1, 107, 6, 111, 2, 9, 111, 115, 2, 9, 115, 119, 2, 13, 119, 123, 1, 123, 9, 127, 1, 5, 127, 131, 1, 131, 2, 135, 1, 135, 6, 0, 99, 2, 0, 14, 0];

const next = 4;

function calcPart1 (input, x, y) {
  input[1] = x;
  input[2] = y;

  let index = 0;
  while (input[index] !== 99) {
    let op = input[index];
    let pos = input[index + 3];
    let idx1 = input[index + 1];
    let idx2 = input[index + 2];

    let val;
    if (op === 1 || op === 2) {
      if (op === 1) {
        val = input[idx1] + input[idx2];
      } else if (op === 2) {
        val = input[idx1] * input[idx2];
      }

      input[pos] = val;
      index += next;
    }
  }

  return input[0];
}

function calcPart2 (input) {
  let x = 0;
  let y = 0;
  let output = 0;

  do {
    output = calcPart1(input.slice(), x, y);
    if (output !== 19690720) {
      if (x < 99) {
        x++;
      } else {
        x = 0;
        y++;
      }
    }
  } while (output !== 19690720);

  return x * 100 + y;
}


console.log('part 1: ' + calcPart1(input.slice(), 12, 2));
console.log('part 2: ' + calcPart2(input.slice()));
