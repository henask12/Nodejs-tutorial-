const fs = require("fs");

// Create a readable stream to read from a source file
const sourceStream = fs.createReadStream("source.txt");

// Create a writable stream to write to a destination file
const destinationStream = fs.createWriteStream("destination.txt");

// Pipe the data from the source stream to the destination stream
sourceStream.pipe(destinationStream);

// Listen for events to track progress or handle errors
sourceStream.on("data", (chunk) => {
  console.log(`Read ${chunk.length} bytes of data.`);
});

destinationStream.on("finish", () => {
  console.log("File write operation complete.");
});

destinationStream.on("error", (err) => {
  console.error("Error writing to file:", err);
});
