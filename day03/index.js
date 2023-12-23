const fs = require("fs");

// [-1, -1] [-1, 0] [-1, + 1]
// [0, -1] [0, 0] [0, + 1]
// [-1, 0] [+ 1, 0] [+ 1, + 1]

function checkSymbol(inputArray, col, row, maxColLen, maxRowLen) {
    ignores = "0123456789.\n";
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (col + i === -1 || row + j === -1) continue;
            if (col + i >= maxColLen || row + j >= maxRowLen) continue;
            // if (inputArray[col + i][row + j] === undefined) continue;
            if (ignores.includes(inputArray[col + i][row + j]) === false) {
                console.log(inputArray[col + i][row + j]);
                return true;
            }
        }
    }
    return false;
}

fs.readFile("input.txt", (err, input) => {
    if (input === undefined) return console.error("Error: input file not found.");
    let answer = 0;
    const inputArray = input.toString().split("\n");
    const maxColLen = inputArray.length;
    const numbers = "0123456789";
    for (let i = 0; i < maxColLen; i++) {
        let curNumLen = 0;
        let isPart = false;
        const maxRowLen = inputArray[i].length;
        for (let j = 0; j < maxRowLen; j++) {
            if (numbers.includes(inputArray[i][j])) {
                curNumLen++;
                if (!isPart) isPart = checkSymbol(inputArray, i, j, maxColLen, maxRowLen);
            } else if (curNumLen !== 0 && isPart) {
                answer += Number(inputArray[i].slice(j - curNumLen, j));
                console.log(Number(inputArray[i].slice(j - curNumLen, j)));
                curNumLen = 0;
                isPart = false;
            } else {
                curNumLen = 0;
                isPart = false;
            }
        }
    }
    console.log(answer);
});
