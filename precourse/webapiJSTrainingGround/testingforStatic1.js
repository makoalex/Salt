const fs = require("fs");
const http = require("http");

const server = http.createServer((req, response) => {
  const fileNameOfUrl = (url) => {
    let fileName = "";
    if (req.url.split("/")[1] === "") {
      fileName = "index.html";
    } else {
      fileName = req.url.split("/")[1];
    }
    return fileName;
  };

  const fileName = fileNameOfUrl(req.url);
  if (fileName === "favicon.ico") {
    response.statusCode = 404;
    response.end('');
    return;
  }
const getFileContent404 = (fileName)=>{
  if(!fs.existsSync(`./static1/${fileName}`)){
    fileName ='404.html'
  }
  return fs.readFileSync(`./static1/${fileName}`, 'utf-8')
}
  const content = getFileContent404(fileName);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(content);
});

const hostname = "localhost";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http//${hostname}:${port}`);
});
