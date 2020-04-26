const mongoose = require("mongoose");

var usersSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : "Required"

    },
    password : {
        type : String,
        required : "Required"
    },
    name : {
        type : String,
        required : "Required"
    }
});

mongoose.model("users", usersSchema)