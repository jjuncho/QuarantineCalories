require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
var db=require("./app/models/index.js");
const connection = require("./app/models");
const UserController = require("./app/controllers/users");
const mongoose = require("mongoose");
const userModel = mongoose.model("users");
const foodModel = mongoose.model("food");
const session = require('express-session');

const app = express();
const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY;
console.log(process.env.APP_ID);
console.log(process.env.API_KEY);
var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(cors(corsOptions));

app.set('view-engine', 'ejs');
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'keyboard cat',
	resave: true,
	saveUnitialized: true
}));



// Main Homepage
app.get("/", (req, res) => {
  // res.json({ message: "Placement for hame page" });
  res.sendFile(path.join(__dirname + '/views/index.html'));
  
});


app.get('/login', function(req, res){
	if (!req.body.username || !req.body.password){
		res.send('login failed');
	}else{

		//implement a for loop to go through logins to find the matching login and then update the session cookie
		var obj = JSON.parse(db.logins);
		for (let prop in obj){
			if(obj[prop].username == req.body.username && obj[prop].password == req.body.password){

				console.log("you're logged in!");
				
			}
		}
		console.log("login failed");
		
		
		res.send(db.logins);
	}

});

//Renders the users on the server along with passwords
app.use("/users", UserController);

app.post("/register", (req,res) =>{
	console.log(req.body);
    var users = new userModel();
    users.username = req.body.username;
    users.password = req.body.password;
    users.name = req.body.name;
    users.save((err, docs)=> {
        if(!err) {
            res.send("Successfully registered!");
        } else {
            res.send(err);
        }
    });

});

app.post("/")




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
