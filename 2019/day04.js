function calcPart1 (start, end) {
  let count = 0;
  for (let i = start; i < end; i++) {
    if (verify(i)) {
      count++;
    }
  }
  return count;
}

function verify (value) {
  let digits = value.toString().split('').map(v => parseInt(v, 10));
  let last = digits[0];
  let doubleCounter = {};
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] === last) {
      if (!doubleCounter.hasOwnProperty(last)) {
        doubleCounter[last] = 1;
      }
      doubleCounter[last]++;
    }
    if (digits[i] < last) {
      return false;
    }
    last = digits[i];
  }

  for (let key in doubleCounter) {
    if (doubleCounter[key] === 2) {
      return true;
    }
  }

  return false;
}

console.log('part1: ' + calcPart1(347312, 805915));