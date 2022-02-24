const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history page");
  }

  res.end(`
  <h1>Ooops!</h1>
  <p>We can't seem to find the page you are lokking for</p>
  <a href="/">Back Home</a>
  `);
});

server.listen(5000);
