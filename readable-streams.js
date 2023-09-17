// ReadableStream

const fs = require("fs");
const readableStream = fs.createReadStream("example.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
