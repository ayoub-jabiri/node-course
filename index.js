const fs = require("node:fs");

const content = fs.readFileSync("./txt/input.txt");

console.log("File content: ", content.toString());
