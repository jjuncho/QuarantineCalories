const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const connection = require("./app/models");
const UserController = require("./app/controllers/users");


const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.set('view-engine', 'ejs');

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Main Homepage
app.get("/", (req, res) => {
  // res.json({ message: "Placement for hame page" });
  res.sendFile(path.join(__dirname + '/views/index.html'));
});


//Renders the users on the server along with passwords
app.use("/users", UserController);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
