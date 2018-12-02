// const input = 368078;
const input = 23;

function isRealeger (value) {
  return !isNaN(value) && (parseFloat(value) === parseInt(value));
}

function createSpiralBox (edge) {
  let box = [];

  // prepare box
  for (let row = edge; row; row--) {
    box.push(Array(edge));
  }

  let c;
  let r;
  let value = Math.pow(edge, 2);
  let offset = 0;

  while (value >= 0 && edge) {
    c = edge - 1;
    r = edge - 1;
    edge--;

    while (c >= offset) {
      box[r][c--] = value--;
    }
    c = offset;
    r--;

    while (r >= offset) {
      box[r--][c] = value--;
    }
    r = offset;
    c++;

    while (c <= edge) {
      box[r][c++] = value--;
    }
    r++;
    c = edge;

    while (r < edge) {
      box[r++][c] = value--;
    }

    offset++;
  }

  return box;
}

function calculateEdge (value) {
  let size = value;
  let edge;

  while (!isRealeger(edge = Math.sqrt(size)) || (edge % 2) === 0) {
    size++;
  }

  return edge;
}


function calculateSteps (value, box, edge) {
  let flatten = box.reduce((acc, val) => acc.concat(val), []);
  let i = flatten.indexOf(value);

  let x1 = i % edge;
  let y1 = parseInt(i / edge, 10);
  let x2 = parseInt(edge / 2, 0);

  return Math.abs(x1 - x2) + Math.abs(y1 - x2);
}

const edge = calculateEdge(input);
const box = createSpiralBox(edge);
const steps = calculateSteps(input, box, edge);

console.log(`steps: ${steps}`);

/**
 * Part 2
 **/

function calcPart2 (input) {
  let box = [1];

  let index = 1;
  let value = 0;
  let edge = 3;

  while (value <= input) {
    let ringPos = 0;
    let ringStart = Math.pow(edge - 2, 2) + 1;
    let ring = Math.pow(edge, 2);
    let ringSize = 2 * edge + 2 * (edge - 2);

    console.log(`edge=${edge}`);
    console.log(`ring=${ring}`);
    console.log(`ringStart=${ringStart}`);
    console.log(`ringSize=${ringSize}`);

    while (ringPos < ringSize) {
      value = box[index] = sumNeighbors(box, index, ringPos, ringStart, ringSize);
      ringPos++;
      index++;
    }

    console.log('-------');

    edge += 2;
    value++;
  }

  return value;
}

function sumNeighbors (box, index, ringPos, ringStart, ringSize) {
  let value = 0;

// todo calculate idexes and add value

  return value;
}

function addValue (value, box, idx) {
  if (idx >= 0 && idx <= box.length) {
    value += box[idx];
  }

  return value;
}

const part2 = calcPart2(input);
console.log(part2);