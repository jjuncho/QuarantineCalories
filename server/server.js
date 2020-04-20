require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY;
console.log(process.env.APP_ID);
console.log(process.env.API_KEY);
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.send('Hello World!');
});

app.get("/totalCalories",(req,res) =>{
	var request = require('request');
	var options = {
  'method': 'POST',
  'url': 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  'headers': {
    'x-app-id': APP_ID ,
    'x-app-key': API_KEY,
    'x-remote-user-id': '0',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"query":"grilled cheese"})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  const result= JSON.parse(response.body);
  console.log(result.foods[0].nf_calories);
});

	res.send('5000');



});




// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
