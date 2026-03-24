const fs = require("node:fs");

const content = fs.readFileSync("./txt/input.txt");

console.log("Start");

console.log("File content: ", content.toString());
