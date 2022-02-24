const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first} , ${second}`,
  { flag: "a" }
);
// when we add this flag {flag: "a"} --> it will append the file , without this flag it will overridde on it
