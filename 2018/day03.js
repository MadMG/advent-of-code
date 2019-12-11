const fs = require("fs");
const path = require("path");
/*const input = fs
  .readFileSync(path.join(__dirname, "input-day03.txt"))
  .toString();*/
const input = "#1 @ 1,3: 4x4\n" + "#2 @ 3,1: 4x4\n" + "#3 @ 5,5: 2x2";

function parseBox(string) {
  let box = {};

  const parts = (string = string
    .replace(/\s/g, "")
    .replace("@", ",")
    .replace(":", ",")
    .replace("x", ",")
    .split(","));

  box.id = parts[0];
  box.x1 = parseInt(parts[1], 10);
  box.y1 = parseInt(parts[2], 10);
  box.x2 = parseInt(parts[3], 10) + box.x1 - 1;
  box.y2 = parseInt(parts[4], 10) + box.y1 - 1;

  return box;
}
/*
function readBoxes(input) {
  return input.split("\n").map(parseBox);
}


function keyOf(i, j) {
  return i + 'x' + j;
}

function calcPart1(input) {
  const boxes = readBoxes(input);
  let count = 0;
  const check = {};

  boxes.forEach(box => {    
    for (let i = box.x1; i < box.x2; i++) {
      for (let j = box.y1; j < box.y2; j++) {
        const key = keyOf(i,j);
        const value = check[key];
  
        if (!value) {
          check[key] = 1;
        } else if (value === 1) {
          check[key]++;
          count++;
        }
      }
    }  
  });

  return count;
}

console.log("part 1: " + calcPart1(input));
*/


const fabric = {};
let result = 0;

for (const claim of input.trim().split('\n')) {
  const box = parseBox(claim);
  const x = box.x1;
  const y = box.y1;
  const xMax = box.x2
  const yMax = box.y2;

  for (let xRunner = x; xRunner < xMax; ++xRunner) {
    for (let yRunner = y; yRunner < yMax; ++yRunner) {
      const posName = `${xRunner}_${yRunner}`;
      const posValue = fabric[posName];

      if (!posValue) {
        fabric[posName] = 1;
      } else if (posValue === 1) {
        fabric[posName] = 2;
        ++result;
      }
    }
  }
}

console.log(result);