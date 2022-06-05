// const http = require('http');
// const port = 3000;
// const hostname = '127.0.0.1'

// const myServer = http.createServer((req, res) => {
//     res.writeHead(202, { 'content-type': 'text/plain' });
//     res.write("hello");
//     res.end();
// });
// myServer.listen(port, hostname, () => {
//     console.log(`server is running sucessfull at http://${hostname}:${port}`);

// });
// http module




// const { totalmem, freemem } = require("os");
// // console.log(os.totalmem());
// console.log(totalmem());
// console.log(freemem());

// path
// const path = require("path");
// const extensionName = path.extname("index.html");
// console.log(extensionName);


// const joiName = path.join(__dirname + "/views");
// console.log(joiName);





// create node server
const http = require("http");
const fs = require("fs");
const PORT = 3000;

const handleReadFile = (fileName, statuscode, req, res) => {


    fs.readFile("fileName", "utf-8",
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "content - type": "text/html" });

                res.write(data);
            }
        });

}
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        handleReadFile("index.html", 200, req, res);

    }
});

server.listen(PORT, () => {
    console.log(`server is running`);
});