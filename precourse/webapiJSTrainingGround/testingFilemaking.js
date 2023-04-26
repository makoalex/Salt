const http = require("http");
const fs = require("fs");

// making a new folder with an html file using the NODE FS

const folderName = process.argv[2]; // if undefined will create this one

//making file within the folder and then in node we will write the name of the folder to be

// we create the files inside this folder

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(
    `${folderName}/index.html`,
    "<h1>Welcome, Landing party of One</h1>'"
  );
} catch (err) {
  console.log("something went wrong");
  console.log(err);
}

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(fs.readFileSync("./static/index.html", 'utf8'));
});
const hostname = "localhost";
const port = 3000;


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });
