const fs = require("node:fs");

const content = fs.readFileSync("./txt/input.txt");

console.log(content.toString());

console.log("Operation completed!");
