const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log(body);
      res.end("Data received !!");
    });
  } else {
    res.end("Welcome to node JS !!");
  }
});

server.listen(3100);
