const fs = require("fs");

// Specify the file path
const filePath = "sample.txt";

// Read the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  console.log("File contents:");
  console.log(data);
});
