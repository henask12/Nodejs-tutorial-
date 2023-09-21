const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Set the response header with the appropriate content type
  res.setHeader("Content-Type", "text/plain");

  // Create a readable stream to read a large file
  const readableStream = fs.createReadStream("large-file.txt");

  // Pipe the readable stream to the response object
  readableStream.pipe(res);

  // Handle errors if they occur
  readableStream.on("error", (err) => {
    console.error("Error reading file:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
