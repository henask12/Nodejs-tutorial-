const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the response content type to plain text
  res.setHeader("Content-Type", "text/plain");

  // Send a "Hello, World!" message
  res.end("Hello, World!\n");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
