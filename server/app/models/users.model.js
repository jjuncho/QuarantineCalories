const mongoose = require("mongoose");

var usersSchema = new mongoose.Schema({
    username : {
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
}, {collection : 'users'}
);

mongoose.model("users", usersSchema)