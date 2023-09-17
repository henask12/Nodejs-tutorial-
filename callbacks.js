const fs = require("fs");

function readFileAsync(filename, callback) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

readFileAsync("sample.txt", (err, content) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", content);
  }
});
