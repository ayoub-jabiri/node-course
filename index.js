const http = require("node:http");
const fs = require("node:fs");

const objData = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const server = http.createServer((req, res) => {
    const path = req.url;

    if (path == "/" || path == "/overview") {
        res.end("This is the overview");
    } else if (path == "/product") {
        res.end("This is the product");
    } else if (path == "/api") {
        res.writeHead(200, {
            "content-type": "application/json",
        });

        res.end(objData);
    } else {
        res.writeHead(404, {
            "content-type": "text/html",
        });
        res.end("<h1>Page not found!</h1>");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("The server is listening on port 3000.,");
});
