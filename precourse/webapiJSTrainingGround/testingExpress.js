const express = require("express");
const app = express();

// app.use((req, res)=>{
//     res.send('we got your request! This is a response') //generates and http response
// })
//ROUTING taking incoming req and a path and matching it to some code and some response
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the homepage</h1>");
});

app.get("/dogs", (req, res) => {
  res.send("<h1>This is where the doggos are</h1>");
});
app.get("/r/:subredit", (req, res) => {
  const { subredit } = req.params;
  res.send(`<h1> On the ${subredit} subredit page`);
});
//request params
app.get("/r/:subredit/:postId", (req, res) => {
  const { subredit, postId } = req.params;
  res.send(`<h1>Browsing in the ${subredit} page, with id if ${postId}</h1>`);
});
//accessing query values
app.get("/search", (req, res) => {
  const { q } = req.query;
  console.log(req.query)
  res.send(`<h1> Search results for ${req.query} </h1>`);
});

app.get("*", (req, res) => {
  res.send("<h1>Path unknown</h1>");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
