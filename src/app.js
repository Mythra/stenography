const http = require("http");

let reqs = [];

const server = http.createServer(function(req, res) {
  console.log(`Handling Path: ${req.url}`);
  if (req.url != "/fetch_recording") {
    let data = "";
    req.on("data", chunk => {
      data += chunk.toString("utf8");
    });
    req.on("end", () => {
      reqs.push({
        headers: req.headers,
        method: req.method,
        url: req.url,
        data: data
      });
      res.writeHead(200, { "Content-Length": 0, "Content-Type": "text/plain" });
      res.end("");
    });
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(reqs));
    reqs = [];
  }
});

var port = 8080;
if (process.env["PORT"] != null) {
  port = parseInt(process.env.PORT);
}
server.listen(port);

console.log(`Server is running on port ${port}`);
