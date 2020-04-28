// const mongoose = require("mongoose");

const dbConfig = require("../config/db.config.js");

// mongoose.Promise = global.Promise;

// var db = {};
// // db.mongoose = mongoose;
// // db.url = dbConfig.url;
// // example on how to import schemas from db
// // db.example = require("./tutorial.model.js")(mongoose);



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


 const users = require("./users.model");
 const food = require("./food.model");
