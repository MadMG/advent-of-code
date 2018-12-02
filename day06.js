const input = [4,10,4,1,8,4,9,14,5,1,14,15,0,15,3,5];

function sortByValue(arr) {
    return arr.slice().sort((a, b) => {
        let diff = b.v - a.v;
        if (diff === 0) {
            diff = a.i - b.i;
        }
        return diff;
    });
}

function sortByIndex(arr) {
    return arr.sort((a, b) => {
        return a.i - b.i;
    });
}

function getMax(arr) {
    return sortByValue(arr)[0];
}

function distribute (arr) {
    let max = getMax(arr);
    let value = max.v;
    let i = max.i + 1;
    
    arr[max.i].v = 0;
    while (value > 0) {
        if (i === arr.length) {
            i = 0;
        }
        arr[i++].v++        
        value--;
    }

    return arr;
}

function generateHistory(arr) {
    return arr.map((v) => {return v.v}).toString();
}

function getCycles(input) {
    let arr = input.map((v, i) => {return {v:v, i: i}});

    let history = [];
    let cycles = 0;
    let h;
    do {
        if (h) {
            history.push(h);
        }
        h = generateHistory(distribute(arr));
        cycles++;
    } while(history.indexOf(h) === -1);    

    return {
        cycles: cycles,
        state: arr.map((v) => {return v.v;})
    };
}

function getPart2(input) {
    let arr = input.map((v, i) => {return {v:v, i: i}});
    const check = generateHistory(arr);
    let cycles = 0;
    do {
        arr = distribute(arr);
        cycles++;
    } while (check !== generateHistory(arr));

    return cycles;
}

const result = getCycles(input);
console.log(`cycles: ${result.cycles}`);
console.log(`part 2: ${getPart2(result.state)}`);





