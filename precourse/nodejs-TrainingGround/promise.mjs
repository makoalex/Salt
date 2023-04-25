import fetch from "node-fetch";

fetch('"https://randomuser.me/api/?results=30"')
  .then((response) => response.json)
  .then((data) => {
    throw new Error("this is the Error that i made");
  })
  .then((results) => console.log(`We got ${results.length} rows. `))
  .catch((err) => console.log(`Something went wrong ${err}`));
