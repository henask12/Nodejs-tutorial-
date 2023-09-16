const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our application homepage");
  }

  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We cant seem to find the page you are looking fo</p>
  <a href="/">Home</a>`);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
