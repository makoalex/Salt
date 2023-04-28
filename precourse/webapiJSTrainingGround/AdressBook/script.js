//let addressBook = require("./address");
const { json } = require("express");
const express = require("express");
const fs = require("fs");
app.use(express.json());
app.set("view engine", "ejs");
const app = express();

const addressBook = JSON.parse(fs.readFileSync("./data/Address.json"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/api/addresbook", (req, res) => {
  res.status(200).json({
    status: "success",
    count: addressBook.length,
    data: {
      addressBook: addressBook,
    },
  });
});
//getting an element

app.get("/api/addresbook/:id", (req, res) => {
  const id = req.params.id;
  const result = addressBook.find((i) => i.id == id);
  if (!result) {
    res
      .status(404)
      .json({
        status: "failed",
        message: `You didn't break the internet, but we didn't find what you're looking for ID: ${id}`,
      })
      .end();
  }
  //send movie in the response
  res.status(200).json({
    status: "success",
    data: {
      result: result,
    },
  });
});

//posting / adding new person
app.post("/api/addresbook/", (req, res) => {
  const newId = Number([addressBook.length]) + 1;
  //creating the new object by merging
  const newAddress = Object.assign({ id: newId }, req.body);
  addressBook.push(newAddress);
  //writing it to the Json file
  fs.writeFile("./data/Address.json", JSON.stringify(addressBook), () => {
    res.status(201).json({
      status: "success",
      data: {
        addressBook: newAddress,
      },
    });
  });
});

app.patch("/api/addresbook/:id", (req, res) => {
  const id = req.params.id * 1;
  const idToUpdate = addressBook.find((i) => i.id === id);
  if (!idToUpdate) {
    res.status(404).json({
      status: "fail",
      message: `You didn't break the internet, but we didn't find what you're looking for ID: ${id}`,
    });
  }

  //finding the index of the obj we want to update
  let index = addressBook.indexOf(idToUpdate);

  // USING OBJECT ASSIGN TO MERGE THE REQUEST AND OBJ TOGETHER
  Object.assign(idToUpdate, req.body);

  //updating the address at the index with the new
  addressBook[index] = idToUpdate;
  fs.writeFile("./data/Address.json", JSON.stringify(addressBook), () => {
    res.status(200).json({
      status: "success",
      data: {
        addressBook: idToUpdate,
      },
    });
  });
});

//DELETING AN OBJECT
app.delete("/api/addresbook/:id", (req, res) => {
  const id = req.params.id * 1;
  const idToDelete = addressBook.find((i) => i.id === id);
  if (!idToDelete) {
    res.status(404).json({
      status: "fail",
      message: `You didn't break the internet, but we didn't find what anything to delete!`,
    });
  }
  const indexToDelete = addressBook.indexOf(idToDelete);
  //separating what we want to delete using splice method
  addressBook.splice(indexToDelete, 1);
  fs.writeFile("./data/Address.json", JSON.stringify(addressBook), () => {
    res.status(204).json({
      status: "success",
      data: {
        message: "Deleted",
      },
    });
  });
});

app.get("*", (req, res) => {
  res.status(404).end();
});
const port = 3000;
app.listen(port, (req, res) => {
  console.log(`Listening on port: http://localhost:${port}`);
});
