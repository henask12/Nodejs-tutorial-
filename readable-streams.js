// ReadableStream

const fs = require("fs");
const readableStream = fs.createReadStream("example.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

//WritableStream
const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Hello, world!");

writableStream.on("finish", () => {
  console.log("The file has been written.");
});
