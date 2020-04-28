require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
//var db=require("./app/models/index.js");
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
var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate() +'-'+today.getFullYear();

app.use(cors(corsOptions));

app.set('view-engine', 'ejs');
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'keyboard cat',
	cookie : {maxAge: 60000}
}));




mongoose.Promise = global.Promise;

// db.mongoose = mongoose;
// db.url = dbConfig.url;
// example on how to import schemas from db
// db.example = require("./tutorial.model.js")(mongoose);


// mongoose.connect("mongodb://localhost:27017/loginData",{ useNewUrlParser: true }, function(error,data)  {
//   if (!error) {
//     console.log("Success");
//     var dbo=data.collection("users");
//     dbo.find({}).toArray(function(err, result){
//     	if(err){
//     		console.log(err);
//     	}
//     	else{
    		
//     		//console.log(JSON.stringify(result));
//     		exports.logins =JSON.stringify(result);
//     		//console.log(db);
//     	}
//     })
    
//   } else  {
//     console.log("Error connecting to database");
//   }
 
// });


const db = mongoose.connect('mongodb://localhost:27017/loginData', {useNewUrlParser: true});

// Main Homepage
app.get("/", (req, res) => {
  // res.json({ message: "Placement for hame page" });
  res.sendFile(path.join(__dirname + '/views/index.html'));
  
});

app.get('/logout', function(req,res){
	req.session.destroy(function(){
		console.log("loggedout");
	});
	res.send("logged out");
});


app.get('/checklogin', function(req,res){
	res.send(req.session.username);
});


app.get('/login', function(req, res){
	var logged_in=0;
	if (!req.body.username || !req.body.password){
		res.send('login failed');
	}else{
		
		//implement a for loop to go through logins to find the matching login and then update the session cookie
		userModel.find(function(err, users ){
			if(err) return console.log(err);

			//console.log(JSON.stringify(users));
			exports.logins=JSON.stringify(users);
		}).then(function(){
		

		var obj = JSON.parse(exports.logins);
		console.log(req.body);
		for (let prop in obj){
			
			if(obj[prop].username === req.body.username && obj[prop].password === req.body.password){
			
				console.log("you're logged in!");
				req.session.username = req.body.username;

				logged_in=1;
				res.send("logged in");

			}
		}
		if (logged_in===0){
			res.send("unable to find user");
		}})

		//res.send(db.logins);
	}

});

//Renders the users on the server along with passwords
app.use("/users", UserController); //dont ever use this, for dev purposes only 



app.post("/register", (req,res) =>{ //adds new user to the collections 'users' checks uniqueness in username || params: {username, password, name}
	//console.log(req.body);
	
		userModel.find(function(err, users ){
			if(err) return console.log(err);

			//console.log(JSON.stringify(users));
			exports.logins=JSON.stringify(users);
	}).then(function(){
	var obj = JSON.parse(exports.logins);
	var registered=0;
	console.log(obj);
	for (let prop in obj){	
			if(obj[prop].username === req.body.username){
				res.send("Username taken please choose another one");
				console.log("registration failed");
				registered =1;
			}
		}
	if(registered===0){
		var users = new userModel();
    	users.username = req.body.username;
   	 	users.password = req.body.password;
    	users.name = req.body.name;
    	users.markModified('users');
   		users.save((err, docs)=> {
	        if(!err) {
	            res.send("Successfully registered!");
	            console.log("registration succeeeded");
	        } else {
	            res.send(err);
	        }
	    })
	}})
    
});

//   route if someone is already logged in

//write up instructions on setting up mongo

app.get("/getfoodDay", (req,res) =>{
	foodModel.find({username: req.session.username, date: date},function(err, food ){
			if(err) return console.log(err);
			//console.log(JSON.stringify(users));
			exports.food=JSON.stringify(food);
	}).then(function(){
		var obj = JSON.parse(exports.food);
		for (let prop in obj){
			console.log(obj[prop]);
			delete obj[prop].username;
			delete obj[prop].__v;
			console.log(obj[prop]);
		}
		res.send(obj);
	})
});

app.get("/totalcaloriesDay", (req,res) =>{
	foodModel.find({username: req.session.username, date: date},function(err, food ){
			if(err) return console.log(err);
			console.log(food);
			exports.food=JSON.stringify(food);
	}).then(function(){
		var obj = JSON.parse(exports.food);
		var total_calories=0;
		for (let prop in obj){
			total_calories += Number(obj[prop].calories);
		}
		res.send("total calories: " +total_calories);
	})
});

app.post("/deletefood", (req,res) =>{
	foodModel.findOneAndDelete({ _id: req.body._id}, function(err){
		if (err) res.send(err);
	})
	res.send("item deleted");

});


app.post("/addfood",(req,res) =>{//adds food to the collections 'food' || params: food:{ITEM} NOTE: USER MUST BE LOGGED IN WITH A SESSSION FOR THIS ENDPOINT TO WOKR
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
  body: JSON.stringify({"query": req.body.food})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  result= JSON.parse(response.body);
  console.log(result.foods[0].nf_calories);
  var food = new foodModel();
  food.username = req.session.username;
  food.food= req.body.food;
  food.calories = result.foods[0].nf_calories;
  food.date= date;
  food.save((err, docs)=> {
  	if(!err){
  		res.send("added successfully");
  	}
  	else{
  		res.send(err);
  	}
  })
});

	

});


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

});
