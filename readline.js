const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter some text: ", (text) => {
  console.log("You entered:", text);
  rl.close();
});
