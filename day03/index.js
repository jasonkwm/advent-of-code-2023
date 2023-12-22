const fs = require("fs");

fs.readFile("input.txt", (err, input) => {
    const inputArray = input.toString().split("\n");
    for (let i = 1; i < inputArray.length; i++) {
        for (let c = 0; c < inputArray[i].length; c++) {}
    }
});
